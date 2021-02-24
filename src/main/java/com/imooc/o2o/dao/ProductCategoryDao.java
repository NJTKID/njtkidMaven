package com.imooc.o2o.dao;

import com.imooc.o2o.entity.ProductCategory;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductCategoryDao {
    /**
     * 分页查询店铺下的商品分类，根据传入的shopId获取类别名称和优先级
     * @param shopId
     * @param rowIndex
     * @param pageSize
     */
    List<ProductCategory> queryProductCategoryList(@Param("shopId") long shopId,@Param("rowIndex") int rowIndex,@Param("pageSize") int pageSize);

    /**
     * 批量新增商品类别
     * @param productCategoryList
     * @return
     */
    int batchInsertProductCategory(List<ProductCategory> productCategoryList);

    /**
     * 删除商品类别
     * @param productCategoryId
     * @param shopId
     * @return
     */
    int deleteProductCategory(@Param("productCategoryId") long productCategoryId, @Param("shopId") long shopId);
}
