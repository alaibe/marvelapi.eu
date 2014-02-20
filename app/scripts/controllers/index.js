'use strict';

angular.module('marvelApi')
.controller('IndexCtrl', function ($scope, $routeParams, MarvelApiService, Pager, Model) {
  $scope.pager = Pager;
  $scope.models = Model.all;
  $scope.title  = $routeParams.type;

  if ($routeParams.page) {
    $scope.pager.page = $routeParams.page;
  }

  $scope.$watch('$routeParams.type', function() {
    $scope.pager.data = [];
    $scope.page       = 0;
  });

  $scope.$watch('pager.page', function() {
    MarvelApiService.loadMore($routeParams.type, $scope.pager);
  });
});
