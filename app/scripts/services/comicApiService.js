'use strict';

angular.module('marvelApi').service('ComicApiService', function(Character, Comic, Event, Story, Creator){
  var publicKey = 'e28664e404abc7d1e9a298f2c677fa0f';

  this.all = function(pager){
    return Comic.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Comic.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];
      $scope.model.type = 'comic';


      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, comics: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return { "characters": Character, "creators": Creator, "events": Event, "stories": Story };
  };
});
