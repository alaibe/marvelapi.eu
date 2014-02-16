'use strict';

angular.module('marvelApi')
.controller('IndexCtrl', function ($scope, CharacterApiService, Pager) {
  $scope.pager = Pager;

  $scope.$watch('pager.page', function() {
    new CharacterApiService.all($scope.pager);
  });
});
