'use strict';

angular.module('marvelApi')
.controller('ShowCtrl', function ($scope, $routeParams, CharacterApiService) {
  new CharacterApiService.find($scope, $routeParams.id);
});
