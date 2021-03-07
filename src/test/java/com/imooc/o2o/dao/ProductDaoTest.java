package com.imooc.o2o.dao;

import com.imooc.o2o.BaseTest;
import com.imooc.o2o.entity.Product;
import com.imooc.o2o.entity.ProductCategory;
import com.imooc.o2o.entity.Shop;
import org.junit.FixMethodOrder;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class ProductDaoTest extends BaseTest {

    @Autowired
    private ProductDao productDao;
    @Autowired
    private ProductImgDao productImgDao;

    @Test
    public void testAInsertProduct() throws Exception{
        Shop shop1 = new Shop();
        shop1.setShopId(1L);
        ProductCategory productCategory1 = new ProductCategory();
        productCategory1.setProductCategoryId(1L);
        //初始化三个商品实例并添加进shopId为1的店铺里，
        //同时商品类别Id也为1
        Product product1 = new Product();
        product1.setProductName("雀巢");
        product1.setProductDesc("测试商品desc1");
        product1.setImgAddr("test1");
        product1.setPriority(1);
        product1.setEnableStatus(1);
        product1.setCreateTime(new Date());
        product1.setLastEditTime(new Date());
        product1.setShop(shop1);
        product1.setProductCategory(productCategory1);
        Product product2 = new Product();
        product2.setProductName("元气森林");
        product2.setProductDesc("测试商品desc2");
        product2.setImgAddr("test2");
        product2.setPriority(2);
        product2.setEnableStatus(0);
        product2.setCreateTime(new Date());
        product2.setLastEditTime(new Date());
        product2.setShop(shop1);
        product2.setProductCategory(productCategory1);
        Product product3 = new Product();
        product3.setProductName("雪碧");
        product3.setProductDesc("测试商品desc3");
        product3.setImgAddr("test3");
        product3.setPriority(3);
        product3.setEnableStatus(1);
        product3.setCreateTime(new Date());
        product3.setLastEditTime(new Date());
        product3.setShop(shop1);
        product3.setProductCategory(productCategory1);
        //判断添加是否成功
        int effectedNum = productDao.insertProduct(product1);
        assertEquals(1,effectedNum);
        effectedNum = productDao.insertProduct(product2);
        assertEquals(1,effectedNum);
        effectedNum = productDao.insertProduct(product3);
        assertEquals(1,effectedNum);
    }

    @Test
    public void testBQueryProductList() throws Exception{
        Product productCondition = new Product();
        //分页查询，预期返回三条结果
        List<Product> productList = productDao.queryProductList(productCondition,0,3);
        assertEquals(3,productList.size());
        //查询名称为测试的商品总数
        int count = productDao.queryProductCount(productCondition);
        assertEquals(5,count);
        //使用商品名称模糊查询，预期返回两条结果
        productCondition.setProductName("测试");
        productList = productDao.queryProductList(productCondition,0,3);
        assertEquals(2,productList.size());
        count = productDao.queryProductCount(productCondition);
        assertEquals(2,count);
    }
}
