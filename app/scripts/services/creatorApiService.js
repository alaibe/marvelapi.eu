'use strict';

angular.module('marvelApi').factory('CreatorApiService', function(Character, Comic, Event, Story, Serie, Creator){
  var publicKey = 'e28664e404abc7d1e9a298f2c677fa0f';

  var all = function(pager){
    return Creator.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  var find = function($scope, id){
    Comic.get({ apikey: publicKey, id: id }, function(response){
      $scope.comic = response.data.results[0];

      Character.get({ apikey: publicKey, comics: id }, function(response){
        $scope.comic.characters = response.data;
      });
      Event.get({ apikey: publicKey, comics: id }, function(response){
        $scope.comic.events = response.data;
      });
      Story.get({ apikey: publicKey, comics: id }, function(response){
        $scope.comic.stories = response.data;
      });
      Serie.get({ apikey: publicKey, comics: id }, function(response){
        $scope.comic.series = response.data;
      });
    });
  };

  return {
    all:  all,
    find: find
  };
});
