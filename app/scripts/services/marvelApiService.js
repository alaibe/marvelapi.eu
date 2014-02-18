'use strict';

angular.module('marvelApi').service('MarvelApiService', function(CharacterApiService, ComicApiService){

  this.resolve = function(type){
    switch(type){
      case 'characters':
        return CharacterApiService;
      case 'comics':
        return ComicApiService;
    }
  }

});
