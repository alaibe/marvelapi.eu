'use strict';

angular.module('marvelApi').service('CharacterApiService', function(Character, Comic, Event, Story, Serie){
  var publicKey = 'e28664e404abc7d1e9a298f2c677fa0f';

  this.all = function(pager){
    return Character.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Character.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];

      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, characters: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return { "comics": Comic, "events": Event, "stories": Story, "series": Serie };
  };
});
