'use strict';

angular.module('myApp.view2')

.component('cartButton', {
  templateUrl: 'view2/cartButton/cart.button.component.html',
  controller: cartButtonController,
  controllerAs: 'ctrl',
  bindings: {
    value: '<'
  }
})

function cartButtonController() {
  // console.log(this.value)
}
