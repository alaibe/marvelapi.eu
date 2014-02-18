'use strict';

angular.module('marvelApi').factory('Character', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/characters/:id', { id: '@id' }, {});
});

angular.module('marvelApi').factory('Comic', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/comics/:id', { id: '@id' }, {});
});

angular.module('marvelApi').factory('Event', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/events/:id', { id: '@id' }, {});
});

angular.module('marvelApi').factory('Story', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/stories/:id', { id: '@id' }, {});
});

angular.module('marvelApi').factory('Serie', function($resource){
  return $resource('http://gateway.marvel.com/v1/public/series/:id', { id: '@id' }, {});
});
