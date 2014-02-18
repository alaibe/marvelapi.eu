angular.module('marvelApi').factory('ComicApiService', function(Character, Comic, Event, Story, Serie){
  var publicKey = '';

  var all = function(pager){
    Comic.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, function(response){
      pager.data = response.data.results;
      pager.itemCount = response.data.total;
    });
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
