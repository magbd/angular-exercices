'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  })
}])

.controller('View3Ctrl' , ['$scope', '$http', function($scope, $http) {
  $scope.peoples = []
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/people/?page=1'
  }).then(function successCallback(response) {
      $scope.peoples = response.data
      // console.log('response', response.data)
      // console.log('peoples', $scope.peoples)
    }, function errorCallback(response) {
      console.log(response.error)
    });
    
  }
])