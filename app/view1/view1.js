'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.todos = [
    { 'title': 'Learn Angular', 'done': false },
    { 'title': 'tuto todo', 'done': true }
  ]

  $scope.addTodo = () => {
    $scope.todos.push({'title': $scope.newTodo, 'done': false})
    $scope.newTodo = ''
  }
  $scope.clearCompleted = () => {
    $scope.todos = $scope.todos.filter(item => !item.done)
  }
}]);