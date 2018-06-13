'use strict';

angular.module('myApp.view2')

  .component('comicList', {
    templateUrl: 'view2/comicList/comic.list.component.html',
    controller: comicListController,
    // controllerAs: 'comicListCtrl'
  })

comicListController.$inject = ['comicsService', '$scope']
function comicListController(comicsService, $scope) {

  $scope.comics = comicsService.list()
  $scope.cart = comicsService.cart()
  $scope.addItem = (comic) => comicsService.addToCart(comic)

}
