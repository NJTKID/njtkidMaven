package com.imooc.o2o.service;

import com.imooc.o2o.dto.ProductCategoryExecution;
import com.imooc.o2o.entity.ProductCategory;
import com.imooc.o2o.exceptions.ProductCategoryOperationException;

import java.util.List;

public interface ProductCategoryService {

    /**
     * 根据shopId获取商店商品列表
     * @param shopId
     * @param pageIndex
     * @param pageSize
     * @return List<ProductCategory>
     */
    List<ProductCategory> getProductCategoryList(long shopId,int pageIndex,int pageSize);

    ProductCategoryExecution batchAddProductCategory(List<ProductCategory> productCategoryList) throws ProductCategoryOperationException;

}
