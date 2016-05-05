/**
 * Created by anandkrishnankutty on 4/17/16.
 */
angular.module('products.controller', ['products.factory']).controller('productController', productController).directive('increment',increment);
productController.$inject = ['productsFactory', '$scope'];
function productController(productsFactory, $scope) {
    $scope.listProducts = function () {
        $scope.myView = 'listView';
        // $scope.limitVal =20;
        /* $scope.products = [{"id" : 17, "gender" : "Male", "first_name" : "Earl", "last_name" : "Cooper", "email" : "ecooperg@spiegel.de", "ip_address" : "227.164.183.181" },
         {"id" : 18, "gender" : "Male", "first_name" : "Frank", "last_name" : "Perry", "email" : "fperryh@ihg.com", "ip_address" : "49.104.236.12" },
         {"id" : 19, "gender" : "Male", "first_name" : "Donald", "last_name" : "Price", "email" : "dpricei@eepurl.com", "ip_address" : "52.241.235.103" }];*/
        productsFactory.getproduct().$promise.then(function (resp) {
            $scope.myView = "listView";
            $scope.products = resp;

        }, function (error) {
            console.log('error-' + error);

        });
    };
    $scope.editDetails = function (product) {

        $scope.product = product ? product : {};
        $scope.myView = 'editView';
    }
    $scope.cancelEdit = function () {
        $scope.listProducts();
        $scope.myView = 'tableView';
    }
    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            productsFactory.updateProduct(product);
            $scope.myView = 'tableView';

        }
        else {
            productsFactory.saveProduct(product).then(function (newProduct) {
                $scope.products.push(newProduct);
                $scope.myView = 'tableView';
            }, function (error) {
                console.log(error);
            });

        }
    }
    $scope.deleteDetails = function (product) {
        productsFactory.deleteProduct(product).then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);

        });
    };
    $scope.listProducts();

}
function increment()
{
    return{
        restrict:'E',
        scope:{
            item: '=item',
            property: '@propertyName',
            restful: '@restful',
            method: '@methodName'

        },
        link:function(scope,element,attrs,ctrl)
        {
            var button = angular.element('<button>').text('+');
            element.append(button);
            button.addClass('btn btn-primary btn-xs');
            button.on('click',function()
            {
                scope.$apply(function() {
                    scope.item[scope.property]++;
                    if (scope.restful)
                        scope.item[scope.method]();
                });

            });


        }
    }

}
