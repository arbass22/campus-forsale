app.controller('mainController', function($http) {
  var main = this;
  main.http = $http;

  main.homePage = {};
  main.categoryPage = {};
  main.itemPage = {};
  main.createPage = {};

  //////////////////////////////////////////////////////////////////////////////

  main.homePage.categories = [{name: 'Books', query: 'books', picture: 'assetts/books.png'},
    {name: 'Event Tickets', query: 'tickets', picture: 'assetts/eventtickets.png'},
    {name: 'Furniture', query: 'furniture', picture: 'assetts/furniture.png'},
    {name: 'Lost and Found', query: 'lost', picture: 'assetts/lostandfound.png'},
    {name: 'Electronics', query: 'electronics', picture: 'assetts/electronics.png'},
    {name: 'Automobiles', query: 'auto', picture: 'assetts/automobiles.png'},
    {name: 'Housing', query: 'housing', picture: 'assetts/housing.png'},
    {name: 'Miscellaneous', query: 'misc', picture: 'assetts/misc.png'}];

  main.homePage.openCategory = function(category){
    main.http.get('/api/search/?category=' + category).then(
      function onSuccess(res){
        main.categoryPage.items = res.data;
      }, function onError(res){
        console.log(res);
      }
    );
  };



  //////////////////////////////////////////////////////////////////////////////

  main.categoryPage.items = johnCena;

  main.categoryPage.search = function(query){
    window.location = '#/category';
    main.http.get('/api/search/?keywords=' + query).then(
      function onSuccess(res){
        console.log(res);
        main.categoryPage.items = res.data;
      }, function onError(res){
        console.log(res);
      }
    );
  };

  main.categoryPage.openItem = function(item){
    console.log(item);
    main.itemPage.object = item;
  };

  //////////////////////////////////////////////////////////////////////////////

  var obj = main.createPage.object;
  main.createPage.create = function(obj){
    main.http.post('/api/items/', {
      title:obj.title,
      description:obj.description,
      pictures:[obj.pictures],
      category:obj.category,
      price:obj.price}).then(
      function onSuccess(res) {
        window.location = '#/';
      }, function onError(res) {
        console.log(res);
      }
    );
  };

  //////////////////////////////////////////////////////////////////////////////

  main.itemPage.object = {};

});





////////////////////////////////////////////////////////////////////////////////

var johnCena = [{title: "MOBY DICK", price: "$40.00"},{title: "ISHMAEL", price: "$50.00"}];
