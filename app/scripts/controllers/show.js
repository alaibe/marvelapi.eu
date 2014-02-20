'use strict';

angular.module('marvelApi')
.controller('ShowCtrl', function ($scope, $routeParams, MarvelApiService, Model) {
  $scope.models = Model.all;
  $scope.title = $routeParams.type;
  MarvelApiService.find($routeParams.type, $routeParams.id, $scope);
});
