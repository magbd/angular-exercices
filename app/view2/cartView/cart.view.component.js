'use strict';

angular.module('myApp.cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'view2/cartView/cart.view.component.html',
    controller: cartView
  })
}])

function cartView() {

}

// .controller('CartCtrl', ['$scope', function($scope) {
//   console.log()
// }])