'use strict';

angular.module('marvelApi').service('SerieApiService', function(Character, Comic, Event, Story, Serie, Creator){
  var publicKey = '';

  this.all = function(pager){
    return Serie.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Serie.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];
      $scope.model.type = 'serie';


      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, series: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return { "characters": Character, "comics": Comic, "events": Event, "creators": Creator, "stories": Story };
  };
});
