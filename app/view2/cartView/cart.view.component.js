'use strict';

angular.module('myApp.cart', ['ngRoute'])

.component('cartView', {
  templateUrl: 'view2/cartView/cart.view.component.html',
  controller: cartViewController
})


cartViewController.$inject = ['comicsService', '$scope']
function cartViewController(comicsService, $scope) {

  $scope.cart = comicsService.cart()
  //$scope.total = comicsService.getTotalAmount()
  $scope.service = comicsService;
  $scope.addItem = (comic) => comicsService.addToCart(comic)
  $scope.removeItem = (product) => comicsService.removeToCart(product)

  // $scope.$watch('total', function() {
  //   $scope
  // })
}

  