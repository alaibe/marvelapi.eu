'use strict';

angular.module('marvelApi').factory('CharacterApiService', function(Character, Comic, Event, Story, Serie){
  var publicKey = '';

  var all = function(pager){
    Character.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, function(response){
      pager.data = response.data.results;
      pager.itemCount = response.data.total;
    });
  };

  var find = function($scope, id){
    Character.get({ apikey: publicKey, id: id }, function(response){
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
