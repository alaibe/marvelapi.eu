'use strict';

angular.module('marvelApi').factory('Character', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:id', { id: '@id' }, {});
});

angular.module('marvelApi').factory('Comic', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:characterId/comics', { characterId: '@characteIid' }, {});
});

angular.module('marvelApi').factory('Event', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:characterId/events', { characterId: '@characteIid' }, {});
});

angular.module('marvelApi').factory('Story', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:characterId/stories', { characterId: '@characteIid' }, {});
});

angular.module('marvelApi').factory('Serie', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:characterId/series', { characterId: '@characteIid' }, {});
});

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

      Comic.get({ apikey: publicKey, characterId: id }, function(response){
        $scope.character.comics = response.data;
      });
      Event.get({ apikey: publicKey, characterId: id }, function(response){
        $scope.character.events = response.data;
      });
      Story.get({ apikey: publicKey, characterId: id }, function(response){
        $scope.character.stories = response.data;
      });
      Serie.get({ apikey: publicKey, characterId: id }, function(response){
        $scope.character.series = response.data;
      });
    });
  };

  return {
    all:  all,
    find: find
  };
});
