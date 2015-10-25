app.controller('mainController', function($http) {
  var main = this;
  main.http = $http;

  main.homePage = {};
  main.categoryPage = {};
  main.itemPage = {};
  main.createPage = {};

  //////////////////////////////////////////////////////////////////////////////

  main.homePage.categories = [{name: 'Books', query: 'books', picture: 'assetts/books.png'},
    {name: 'Event Tickets', query: 'eventtickets', picture: 'assetts/eventtickets.png'},
    {name: 'Furniture', query: 'furniture', picture: 'assetts/furniture.png'},
    {name: 'Lost and Found', query: '', picture: 'assetts/lostandfound.png'},
    {name: 'Electronics', query: 'electronics', picture: 'assetts/electronics.png'},
    {name: 'Automobiles', query: 'auto', picture: 'assetts/automobiles.png'},
    {name: 'Housing', query: 'housing', picture: 'assetts/housing.png'},
    {name: 'Miscellaneous', query: 'misc', picture: 'assetts/misc.png'}];

  main.homePage.openCategory = function(category){
    main.http.get('/api/search/?category=' + category).then(
      function onSuccess(res){
        main.categories.items = res.data;
      }, function onError(res){
        console.log(res);
      }
    );
  };

  //////////////////////////////////////////////////////////////////////////////

  main.categoryPage.items = johnCena;

  //////////////////////////////////////////////////////////////////////////////


});

var johnCena = [{title: "You're", query: ""},{title: "time", query: ""},{title: "is", query: ""},{title: "up", query: ""},
{title: "you're", query: ""},{title: "time", query: ""},{title: "is", query: ""},{title: "now", query: ""}];
