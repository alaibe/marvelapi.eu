'use strict';

angular.module('marvelApi').service('StoryApiService', function(Character, Comic, Event, Story){
  var publicKey = 'e28664e404abc7d1e9a298f2c677fa0f';

  this.all = function(pager){
    return Story.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Story.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];

      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, stories: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return { "characters": Character, "comics": Comic, "creators": Creator, "events": Event };
  };
});
