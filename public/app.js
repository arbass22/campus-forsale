var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/category', {
        templateUrl: 'category.html'
      })
      .when('/item', {
        templateUrl: 'item.html'
      })
      .when('/create', {
        templateUrl: 'create.html'
      });
  }]);
