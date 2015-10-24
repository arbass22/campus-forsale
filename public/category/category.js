angular.module('app.controller.category', [])
  .controller('categoryController', function($http) {
    var category = this;
    category.items = johnCena;

    category.populate = function(){

    };
  });

var johnCena = [{name: "You're", query: ""},{name: "time", query: ""},{name: "is", query: ""},{name: "up", query: ""},
{name: "you're", query: ""},{name: "time", query: ""},{name: "is", query: ""},{name: "now", query: ""}];
