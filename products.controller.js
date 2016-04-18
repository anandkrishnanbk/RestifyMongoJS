/**
 * Created by anandkrishnankutty on 4/17/16.
 */
angular.module('products.controller',['products.factory']).controller('productController',productController);
productController.$inject=['productsFactory'];
function productController(productsFactory)
{
    $scope.myView="listView";

}
