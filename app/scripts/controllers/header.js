'use strict';

angular.module('marvelApi')
.controller('HeaderCtrl', function ($scope, $routeParams) {
  $scope.title = $routeParams.type;
});
