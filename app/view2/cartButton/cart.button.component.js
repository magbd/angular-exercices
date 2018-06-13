'use strict';

angular.module('myApp.view2')

.component('cartButton', {
  templateUrl: 'view2/cartButton/cart.button.component.html',
  controller: cartButtonController,
  controllerAs: 'cartButtonCtrl',
  bindings: {
    cart: '<'
  }
})

cartButtonController.$inject = ['comicsService' ,'$scope']
function cartButtonController(comicsService, $scope) {
  // console.log('[cart data from button component]', this.cart)
}

