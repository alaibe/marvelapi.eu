'use strict';

angular.module('marvelApi')
.controller('ShowCtrl', function ($scope, $routeParams, MarvelApiService) {
  var service = MarvelApiService.resolve($routeParams.type);
  service.find($scope, $routeParams.id);
});
