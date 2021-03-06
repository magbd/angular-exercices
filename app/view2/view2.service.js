

(function() {
  'use strict';

  angular
    .module('myApp.view2')
    .factory('comicsService', comicsService);

    function comicsService() {
      
      var cart = []
      var cartItems = 0
      var totalAmount = 0

      var service = {
        list: list,
        cart: getCart,
        addToCart: addToCart,
        removeToCart: removeToCart,
        getTotalAmount: getTotalAmount,
        getTotalCartItems: getTotalCartItems,
        getById: getById
      };

      
      function list() {
        var mockComics = [
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
      return mockComics
    }

    function getById(paramId) {
      var comics = list()
      var comic = comics.filter(c => c.id == paramId)
      return comic
    }

    function getCart() {
      return cart
    }

    function getTotalAmount() {
      console.log('getTotalAmount', totalAmount)
      return totalAmount
    }

    function getTotalCartItems() {
      return cartItems
    }

    function addToCart(comic) {
      if (cart.length === 0) {
        cart.push({id: comic.id, count: 1, comic: comic})
      }
      else {
        var repeat = false
        cart.map((item, index) => {
          if (item.id === comic.id) {
            repeat = true
            cart[index].count ++
          }
        })
        if (!repeat) {
          cart.push({id: comic.id, count: 1, comic: comic})
        }
      }
      cartItems ++
      totalAmount = getTotalAmount() + comic.price
      console.log(totalAmount)
    }

    function removeToCart(cartItem) {
      if (cartItem.count > 1 ) {
        cartItem.count -= 1
      }
      else if (cartItem.count === 1) {
        var index = cart.indexOf(cartItem)
        cart.splice(index, 1)
      }
      cartItems --
      totalAmount = getTotalAmount() - cartItem.comic.price
      console.log(totalAmount)
    }
    
    return service;

  }


})();

