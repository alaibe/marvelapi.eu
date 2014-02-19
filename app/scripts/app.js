'use strict';

angular.module('marvelApi', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:type', {
        templateUrl: 'views/index/main.html',
        controller: 'IndexCtrl'
      })
      .when('/:type/page/:page', {
        templateUrl: 'views/index/main.html',
        controller: 'IndexCtrl'
      })
      .when('/:type/:id', {
        templateUrl: 'views/show/main.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/characters'
      });
  });
