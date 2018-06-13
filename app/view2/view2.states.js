'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/view2', {
      template: '<comic-list></comic-list>'
    })
    .when('/view2/detail/:id', {
      template: '<comic-detail></comic-detail>'
    })
    .when('/view2/cart', {
      template: '<cart-view></cart-view>'
    })
}])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/cart', {
//     templateUrl: 'view2/cartView/cart.view.component.html',
//     controller: cartView
//   })
// }])