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
        templateUrl: function(params) {
          return 'views/' + params.type + '/index.html';
        },
        controller: 'IndexCtrl'
      })
      .when('/:type/:id', {
        templateUrl: function(params) {
          return 'views/' + params.type + '/show.html';
        },
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/characters'
      });
  });
