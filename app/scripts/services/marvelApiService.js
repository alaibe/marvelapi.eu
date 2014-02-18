'use strict';

angular.module('marvelApi').service('MarvelApiService', function(CharacterApiService, ComicApiService){

  this.all = function(type, pager){
    return this.resolve(type).all(pager);
  };

  this.find = function(type, id, scope){
    return this.resolve(type).find(scope, id);
  };

  this.resolve = function(type){
    switch(type){
    case 'characters':
      return CharacterApiService;
    case 'comics':
      return ComicApiService;
    }
  };

});
