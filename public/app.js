angular.module('app', ['ngRoute', 'app.controller.home', 'app.controller.category', 'app.controller.item'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/category', {
        templateUrl: 'category/category.html',
        controller: 'categoryController',
        controllerAs: 'category'
      })
      .when('/item', {
        templateUrl: 'item/item.html',
        controller: 'itemController',
        controllerAs: 'item'
      });

  }]);
