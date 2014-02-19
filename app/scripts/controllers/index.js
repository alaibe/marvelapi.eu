'use strict';

angular.module('marvelApi')
.controller('IndexCtrl', function ($scope, $routeParams, MarvelApiService, Pager) {
  $scope.pager = Pager;

  $scope.$watch('$routeParams.type', function() {
    $scope.pager.data = [];
    $scope.page       = 0;
  });

  $scope.$watch('pager.page', function() {
    MarvelApiService.loadMore($routeParams.type, $scope.pager);
  });
});
