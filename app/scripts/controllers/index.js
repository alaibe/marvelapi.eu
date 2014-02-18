'use strict';

angular.module('marvelApi')
.controller('IndexCtrl', function ($scope, $routeParams, MarvelApiService, Pager) {
  $scope.pager = Pager;

  $scope.$watch('pager.page', function() {
    var service = MarvelApiService.resolve($routeParams.type);
    service.all($scope.pager);
  });
});
