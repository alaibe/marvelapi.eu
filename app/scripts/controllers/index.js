'use strict';

angular.module('marvelApi')
.controller('IndexCtrl', function ($scope, $routeParams, MarvelApiService, Pager) {
  $scope.pager = Pager;

  $scope.$watch('pager.page', function() {
    MarvelApiService.all($routeParams.type, $scope.pager);
  });
});
