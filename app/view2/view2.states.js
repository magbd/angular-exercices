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
}])