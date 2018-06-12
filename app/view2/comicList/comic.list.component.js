'use strict';

angular.module('myApp.view2')

.component('comicList', {
  templateUrl: 'view2/comicList/comic.list.component.html',
  controller: comicListController,
  // controllerAs: 'comicListCtrl'
  })
  
// export default {
// }


comicListController.$inject = ['comicsService' ,'$scope']
function comicListController(comicsService, $scope) {

  $scope.comics = comicsService.list()
  $scope.counter = 0

  $scope.getCart = function () {
    return comicsService.addToCart()
  }
  // $scope.cart = comicsService.addToCart()

  // $scope.addToCart = () => {
  //   $scope.counter++
  //   console.log($scope.counter)
  // }
  // this.test = comicsService.addToCart()

  // this.addToCart = (comic) => {
  //   this.cart.push(comic)
  //   // console.log('cart',$scope.cart)
  // }

}
