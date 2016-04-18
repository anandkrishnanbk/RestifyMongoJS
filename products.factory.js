(function() {

    'use strict';
    /**
     * Created by anandkrishnankutty on 4/17/16.
     */
    angular.module('products.factory', ['ngResource']).factory('productsFactory', productsFactory);
    productsFactory.$inject = ['$resource'];
    function productsFactory($resource) {
        var url='http://localhost:3002/products',products;
        var productsResource= $resource(url+':id',{id:'@id'});
        return {

            getproduct: function () {
                products=productsResource.query();
                 return products;

            },
            addProduct: function () {

            },
            getOneProduct: function () {

            },
            updateProduct: function () {

            }
        }


    }
})()
