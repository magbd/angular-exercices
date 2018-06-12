'use strict';

angular.module('myApp.view2')


.component('comicDetail', {
  templateUrl: 'view2/comicDetail/comic.detail.component.html',
  controller: comicDetailController,
  // controllerAs: 'comicListCtrl'
  })

comicDetailController.$inject = ['comicsService', '$scope', '$routeParams']
function comicDetailController(comicsService, $scope, $routeParams) {

  $scope.detail = comicsService.getById($routeParams.id)[0]
  console.log($scope.detail.title)
}