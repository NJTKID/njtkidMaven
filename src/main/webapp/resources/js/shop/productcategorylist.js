$(function() {
    var listUrl = '/njtkidMaven/shopadmin/getproductcategorylist';
    var addUrl = '/njtkidMaven/shopadmin/addproductgories';
    var deleteUrl = '/njtkidMaven/shopadmin/removeproductgory';
    getlist();
    function getlist(e) {
        $.getJSON(listUrl,function (data) {
            if (data.success){
                var dataList = data.data;
                $('.product-category-wrap').html('');
                var tempHtml = '';
                dataList.map(function (item,index) {
                    tempHtml += '<div class="row row-product-category now">'
                        +'<div class="col-33 product-category-name">'
                        + item.productCategoryName
                        +'</div>'
                        +'<div class="col-33">'
                        + item.priority
                        +'</div>'
                        +'<div class="col-33"><a href="#" class="button delete" data-id="'
                        +item.productCategoryId
                        +'">删除</a></div>'
                        +'</div>'
                });
                $('.product-category-wrap').append(tempHtml);
            }
        });
    }



});