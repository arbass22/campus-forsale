angular.module('app.controller.home', [])
  .controller('homeController', function($http) {
    var home = this;
    home.categories = [{name: "Books", query: ""},{name: "Event Tickets", query: ""}, {name: "Furniture", query: ""},
    {name: "Clothing", query: ""}, {name: "Lost and Found", query: ""}, {name: "Rides", query: ""}, {name: "Electronics", query: ""},
    {name: "Dorm Supplies", query: ""}, {name: "Automobiles", query: ""}, {name: "Housing", query: ""}, {name: "Misc", query: ""}];

    home.populate = function(){

    };
  });
