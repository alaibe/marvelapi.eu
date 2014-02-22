'use strict';

angular.module('marvelApi').service('CreatorApiService', function(Comic, Event, Story, Serie, Creator){
  var publicKey = '';

  this.all = function(pager){
    return Creator.get({ apikey: publicKey, limit: pager.perPage, offset: pager.offset() }, {}).$promise;
  };

  this.find = function($scope, id){
    $scope.hasMany = this.hasMany();

    return Creator.get({ apikey: publicKey, id: id }, function(response){
      $scope.model = response.data.results[0];
      $scope.model.type = 'creator';

      angular.forEach($scope.hasMany, function(value, key){
        value.get({ apikey: publicKey, creators: id }, function(response){
          $scope.model[key] = response.data;
        });
      });
    });
  };

  this.hasMany = function() {
    return {"comics": Comic, "events": Event, "stories": Story, "series": Serie};
  };
});
