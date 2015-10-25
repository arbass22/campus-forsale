app.controller('mainController', function($http) {
  var main = this;
  main.http = $http;

  main.homePage = {};
  main.categoryPage = {};
  main.itemPage = {};
  main.createPage = {};

  //////////////////////////////////////////////////////////////////////////////

  main.homePage.categories = [{name: 'Books', query: 'books', picture: 'assetts/books'}, {name: 'Event Tickets', query: 'eventtickets', picture: 'assetts/eventtickets'},
    {name: 'Furniture', query: 'furniture', picture: 'assetts/furniture'}, {name: 'Clothing', query: 'clothing', picture: 'assetts/clothing'},
    {name: 'Lost and Found', query: '', picture: 'assetts/lostandfound'}, {name: 'Rides', query: '', picture: 'assetts/rides'},
    {name: 'Electronics', query: 'electronics', picture: 'assetts/electronics'}, {name: 'Dorm Supplies', query: 'dorm', picture: 'assetts/dormsupplies'},
    {name: 'Automobiles', query: 'auto', picture: 'assetts/automobiles'}, {name: 'Housing', query: 'housing', picture: 'assetts/housing'},
    {name: 'Miscellaneous', query: 'misc', picture: 'assetts/misc'}, {name: "Jobs", query: 'jobs', picture: 'assetts/jobs'}];

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

var johnCena = [{name: "You're", query: ""},{name: "time", query: ""},{name: "is", query: ""},{name: "up", query: ""},
{name: "you're", query: ""},{name: "time", query: ""},{name: "is", query: ""},{name: "now", query: ""}];
