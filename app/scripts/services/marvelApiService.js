'use strict';

angular.module('marvelApi').service('MarvelApiService', function(CharacterApiService, ComicApiService, EventApiService,
  SerieApiService, StoryApiService, CreatorApiService){

  this.find = function(type, id, scope){
    return this.resolve(type).find(scope, id);
  };

  this.loadMore = function(type, pager) {
    var service = this.resolve(type);

    service.all(pager).then(function(result) {
      var items       = result.data.results;
      pager.itemCount = result.data.total;

      items.forEach(function(item) {
        pager.data.push(item);
      });
    });
  };

  this.resolve = function(type){
    switch(type){
    case 'characters':
      return CharacterApiService;
    case 'comics':
      return ComicApiService;
    case 'events':
      return EventApiService;
    case 'series':
      return SerieApiService;
    case 'stories':
      return StoryApiService;
    case 'creators':
      return CreatorApiService;
    }
  };

});
