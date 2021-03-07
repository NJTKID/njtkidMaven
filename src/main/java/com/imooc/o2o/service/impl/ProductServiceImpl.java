package com.imooc.o2o.service.impl;

import com.imooc.o2o.dao.ProductDao;
import com.imooc.o2o.dao.ProductImgDao;
import com.imooc.o2o.dto.ImageHolder;
import com.imooc.o2o.dto.ProductExecution;
import com.imooc.o2o.entity.Product;
import com.imooc.o2o.entity.ProductImg;
import com.imooc.o2o.enums.ProductStateEnum;
import com.imooc.o2o.exceptions.ProductOperationException;
import com.imooc.o2o.service.ProductService;
import com.imooc.o2o.util.ImageUtil;
import com.imooc.o2o.util.PageCalculator;
import com.imooc.o2o.util.PathUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ProductImgDao productImgDao;


    @Override
    public ProductExecution addProduct(Product product, ImageHolder thumbnail, List<ImageHolder> productImgHolderList) throws ProductOperationException {
        //空值判断
        if (product != null && product.getShop() != null && product.getShop().getShopId() != null) {
            //给商品设置上默认属性
            product.setCreateTime(new Date());
            product.setLastEditTime(new Date());
            //默认为上架的状态
            product.setEnableStatus(1);
            if (thumbnail != null) {
                addThumbnail(product, thumbnail);
            }
            try {
                //创建商品信息
                int effectNum = productDao.insertProduct(product);
                if (effectNum <= 0) {
                    throw new ProductOperationException("商品创建失败");
                }
            } catch (Exception e) {
                throw new ProductOperationException("创建商品失败:" + e.getMessage());
            }
            //若商品详情图不为空则添加
            if (productImgHolderList != null && productImgHolderList.size() > 0) {
                //存储图片
                addProductImgList(product, productImgHolderList);
            }
            return new ProductExecution(ProductStateEnum.SUCCESS, product);
        }else {
            //传参为空则返回控制错误信息
            return new ProductExecution(ProductStateEnum.NULL_PRODUCT);
        }
    }

    @Override
    public ProductExecution getProductList(Product product, int pageIndex, int pageSize) {
        //页码转换成数据库的行码，并调用dao层取回指定页码的商品列表
        int rowIndex = PageCalculator.calculateRowIndex(pageIndex,pageSize);
        List<Product> productList = productDao.queryProductList(product,rowIndex,pageSize);
        //基于同样的查询条件返回该查询条件下的商品总数
        int count = productDao.queryProductCount(product);
        ProductExecution productExecution = new ProductExecution();
        if (productList != null){
            productExecution.setProductList(productList);
            productExecution.setCount(count);
        }else {
            productExecution.setState(ProductStateEnum.INNER_ERROR.getState());
        }
        return productExecution;
    }

    @Override
    public Product getProductById(long productId) {
        return productDao.queryByProductId(productId);
    }

    /*
    @Override
    public ProductExecution modifyProduct(Product product, InputStream productImgInputStream, String fileName) throws ProductOperationException {
        if(product == null || product.getProductId() == null){
            return new ProductExecution(ProductStateEnum.NULL_PRODUCT);
        }else {
            //1、判断是否需要处理图片
            try {
                if(productImgInputStream != null && fileName != null && !"".equals(fileName)){
                    Product tempProduct = productDao.queryProductByProductId(product.getProductId());
                    if(tempProduct.getImgAddr() != null){
                        ImageUtil.deleteFileOrPath(tempProduct.getImgAddr());
                    }
                    addProductImg(product,productImgInputStream,fileName);
                }
                //2、更新商品信息
                product.setLastEditTime(new Date());
                int effectedNum = productDao.updateProduct(product);
                if (effectedNum <= 0){
                    return new ProductExecution(ProductStateEnum.INNER_ERROR);
                }else {
                    product = productDao.queryProductByProductId(product.getProductId());
                    return new ProductExecution(ProductStateEnum.SUCCESS,product);
                }
            }catch (Exception e){
                throw new ProductOperationException("modifyProduct error:" + e.getMessage());
            }
        }

    }
*/

    /**
     * 添加缩略图
     * @param product
     * @param thumbnail
     */
    private void addThumbnail(Product product,ImageHolder thumbnail){
        String dest = PathUtil.getShopImagePath(product.getShop().getShopId());
        String thumbnailAddr = ImageUtil.generateThumbnail(thumbnail,dest);
        product.setImgAddr(thumbnailAddr);
    }


    private void addProductImgList(Product product, List<ImageHolder> productImageHolderList) {
        //获取图片存储路径，这里直接存放到相应店铺的文件夹底下
        String dest = PathUtil.getShopImagePath(product.getProductId());
        List<ProductImg> productImgList = new ArrayList<ProductImg>();
        //遍历图片一次去处理，并添加进productImg实体类里
        for (ImageHolder productImgHolder : productImageHolderList) {
            String productImgAddr = ImageUtil.generateNormalImg(productImgHolder, dest);
            ProductImg productImg = new ProductImg();
            productImg.setImgAddr(productImgAddr);
            productImg.setProductId(product.getProductId());
            productImg.setCreateTime(new Date());
            productImgList.add(productImg);
        }
        //如果确实是有图片需要添加的，就执行批量添加操作
        if (productImgList.size() > 0){
            try{
                int effectedNum = productImgDao.batchInsertProductImg(productImgList);
                if (effectedNum <= 0){
                    throw new ProductOperationException("创建商品详情图片失败");
                }
            }catch (Exception e){
                throw new ProductOperationException("创建商品详情图片失败:" + e.toString());
            }
        }
    }
}
