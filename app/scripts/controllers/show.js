'use strict';

angular.module('marvelApi')
.controller('ShowCtrl', function ($scope, $routeParams, MarvelApiService) {
  MarvelApiService.find($routeParams.type, $routeParams.id, $scope);
});
