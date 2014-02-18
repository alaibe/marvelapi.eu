'use strict';

angular.module('marvelApi').factory('CharacterApiService', function(Character, Comic, Event, Story, Serie){
  var publicKey = 'e28664e404abc7d1e9a298f2c677fa0f';

  var all = function(pager){
    return Character.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  var find = function($scope, id){
    return Character.get({ apikey: publicKey, id: id }, function(response){
      $scope.character = response.data.results[0];

      Comic.get({ apikey: publicKey, characters: id }, function(response){
        $scope.character.comics = response.data;
      });
      Event.get({ apikey: publicKey, characters: id }, function(response){
        $scope.character.events = response.data;
      });
      Story.get({ apikey: publicKey, characters: id }, function(response){
        $scope.character.stories = response.data;
      });
      Serie.get({ apikey: publicKey, characters: id }, function(response){
        $scope.character.series = response.data;
      });
    });
  };

  return {
    all:  all,
    find: find
  };
});
