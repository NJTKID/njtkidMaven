package com.imooc.o2o.service.impl;

import com.imooc.o2o.dao.ProductCategoryDao;
import com.imooc.o2o.dao.ProductDao;
import com.imooc.o2o.dto.ProductCategoryExecution;
import com.imooc.o2o.entity.ProductCategory;
import com.imooc.o2o.enums.ProductCategoryStateEnum;
import com.imooc.o2o.exceptions.ProductCategoryOperationException;
import com.imooc.o2o.service.ProductCategoryService;
import com.imooc.o2o.util.PageCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryImpl implements ProductCategoryService {

    @Autowired
    ProductDao productDao;

    @Autowired
    ProductCategoryDao productCategoryDao;

    @Override
    public List<ProductCategory> getProductCategoryList(long shopId, int pageIndex, int pageSize) {
        int rowIndex = PageCalculator.calculateRowIndex(pageIndex,pageSize);
        List<ProductCategory> productCategoryList = productCategoryDao.queryProductCategoryList(shopId,rowIndex,pageSize);
        return productCategoryList;
    }

    @Override
    public ProductCategoryExecution batchAddProductCategory(List<ProductCategory> productCategoryList) throws ProductCategoryOperationException {
            if (productCategoryList != null && productCategoryList.size() > 0) {
                try {
                    int effectedNum = productCategoryDao.batchInsertProductCategory(productCategoryList);
                    if (effectedNum <= 0) {
                        throw new ProductCategoryOperationException("店铺类别创建失败");
                    } else {
                        return new ProductCategoryExecution(ProductCategoryStateEnum.SUCCESS);
                    }
                } catch (Exception e) {
                    throw new ProductCategoryOperationException("batchAddProductCategory errot:" + e.getMessage());
                }
            }else {
                return new ProductCategoryExecution(ProductCategoryStateEnum.EMPTY_LIST);
            }

    }

    @Override
    public ProductCategoryExecution deleteProductCategory(long productCategoryId, long shopId) throws ProductCategoryOperationException {
        //解除tb_product里的商品与该productcategoryId的关联
        try {
            int effectedNum = productDao.updateProductCategoryToNull(productCategoryId);
            if (effectedNum <= 0){
                throw new ProductCategoryOperationException("商品类别更新失败");
            }
        }catch (Exception e){
            throw new ProductCategoryOperationException("deleteProductCategory error:" + e.getMessage());
        }
        //删除productCategory
        try {
            int effectedNum = productCategoryDao.deleteProductCategory(productCategoryId,shopId);
            if (effectedNum <= 0){
                throw new ProductCategoryOperationException("商品类别删除失败");
            }else {
                return new ProductCategoryExecution(ProductCategoryStateEnum.SUCCESS);
            }
        }catch (Exception e){
            throw new ProductCategoryOperationException("deleteProductCategory error:" + e.getMessage());
        }
    }
}
