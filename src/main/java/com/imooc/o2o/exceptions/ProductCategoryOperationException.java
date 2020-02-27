package com.imooc.o2o.exceptions;

import com.imooc.o2o.entity.ProductCategory;

public class ProductCategoryOperationException extends RuntimeException{

    public ProductCategoryOperationException(String msg){
        super(msg);
    }
}
