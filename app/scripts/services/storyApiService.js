'use strict';

angular.module('marvelApi').service('StoryApiService', function(Character, Comic, Event, Story, Creator){
  var publicKey = '';

  this.all = function(pager){
    return Story.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Story.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];
      $scope.model.type = 'story';

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
