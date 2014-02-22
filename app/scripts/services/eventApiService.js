'use strict';

angular.module('marvelApi').service('EventApiService', function(Character, Comic, Event, Story, Serie, Creator){
  var publicKey = '';

  this.all = function(pager){
    return Event.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Event.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];
      $scope.model.type = 'event';


      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, events: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return { "characters": Character, "comics": Comic, "creators": Creator, "stories": Story, "series": Serie };
  };
});
