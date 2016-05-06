(function () {

    'use strict';
    /**
     * Created by anandkrishnankutty on 4/17/16.
     */
    /*.config(function ($httpProvider) {
     $httpProvider.defaults.headers.common = {};
     $httpProvider.defaults.headers.post = {};
     $httpProvider.defaults.headers.put = {};
     $httpProvider.defaults.headers.patch = {};
     }*/
    angular.module('products.factory', ['ngResource']).factory('productsFactory', productsFactory);
    productsFactory.$inject = ['$resource'];
    function productsFactory($resource) {
        var url = 'http://localhost:3004/products/', products;
        var productsResource = $resource(url+':id', {id: '@id'});
        return {
            getproduct: function () {
                products = productsResource.query();
                return products;

            },
            saveProduct: function (product) {
                return new productsResource(product).$save();
            },
            cancelEditProduct: function()
            {

            },
            getOneProduct: function () {

            },
            updateProduct: function (product) {
                product.$save();
            },
            deleteProduct: function (product) {
                return product.$delete();
            }
        }
    }
})();
