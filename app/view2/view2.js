'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.limitText = 100;
  $scope.comics = [
    {
      "id": 0,
      "title": "Kabuki Reflections Vol. 1",
      "description": "Collecting the first six art books of Marvel's REFLECTIONS series from multiple Eisner Award-nominated creator David Mack, this gorgeous volume of cover paintings and step-by-step...",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/e/e0/4bac3ad5d17c7.jpg",
      "price": 39.99
    },
    {
      "id": 1,
      "title": "Civil War",
      "description": "The landscape of the Marvel Universe is changing, and it's time to choose: Whose side are you on? A conflict has been brewing from more than a year, threatening to pit friend...",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/51dda501724ed.jpg",
      "price": 39.99
    },
    {
      "id": 2,
      "title": "The Stand: American Nightmares HC",
      "description": "The deadly super flu Captain Trips has devastated the country and now the few survivors must pick up the pieces and go on. Larry Underwood seeks escape from New York City.",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/4bb59859e2e3e.jpg",
      "price": 24.99
    },
    {
      "id": 3,
      "title": "Marvel's Guardians of the Galaxy Vol. 2: The Art of the Movie Slipcase",
      "description": "The Guardians are back! After saving the universe, Star-Lord, Gamora, Drax, Rocket and Groot find themselves with expunged records and a new mandate: Guard what needs guarding.",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/5903bfb656850.jpg",
      "price": 50
    },
    {
      "id": 4,
      "title": "The Unbeatable Squirrel Girl Vol. 2",
      "description": "With her unique combination of wit, empathy and squirrel powers, computer science student Doreen Green is all that stands between the Earth and total destruction. Well, Doreen plus her friends Tippy-Toe (a squirrel) and Nancy (a regular human).",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5903c179c6a3d.jpg",
      "price": 34.99
    }
  ]

  
}]);

// export default {
//   controller: ComicsListController,
//   controllerAs: 'ctrl'
// }

// function ComicsListController() {
//   const ctrl = this

//   ctrl.limitText = 100;
//   ctrl.comics = [
//     {
//       "id": 0,
//       "title": "Kabuki Reflections Vol. 1",
//       "description": "Collecting the first six art books of Marvel's REFLECTIONS series from multiple Eisner Award-nominated creator David Mack, this gorgeous volume of cover paintings and step-by-step...",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/e/e0/4bac3ad5d17c7.jpg",
//       "price": 39.99
//     },
//     {
//       "id": 1,
//       "title": "Civil War",
//       "description": "The landscape of the Marvel Universe is changing, and it's time to choose: Whose side are you on? A conflict has been brewing from more than a year, threatening to pit friend...",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/51dda501724ed.jpg",
//       "price": 39.99
//     },
//     {
//       "id": 2,
//       "title": "The Stand: American Nightmares HC",
//       "description": "The deadly super flu Captain Trips has devastated the country and now the few survivors must pick up the pieces and go on. Larry Underwood seeks escape from New York City.",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/4bb59859e2e3e.jpg",
//       "price": 24.99
//     },
//     {
//       "id": 3,
//       "title": "Marvel's Guardians of the Galaxy Vol. 2: The Art of the Movie Slipcase",
//       "description": "The Guardians are back! After saving the universe, Star-Lord, Gamora, Drax, Rocket and Groot find themselves with expunged records and a new mandate: Guard what needs guarding.",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/5903bfb656850.jpg",
//       "price": 50
//     },
//     {
//       "id": 4,
//       "title": "The Unbeatable Squirrel Girl Vol. 2",
//       "description": "With her unique combination of wit, empathy and squirrel powers, computer science student Doreen Green is all that stands between the Earth and total destruction. Well, Doreen plus her friends Tippy-Toe (a squirrel) and Nancy (a regular human).",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5903c179c6a3d.jpg",
//       "price": 34.99
//     }
//   ]
// }
