'use strict';

angular.module('marvelApi').service('Pager', function(){
  this.page      = 0;
  this.perPage   = 50;
  this.itemCount = 0;
  this.data      = [];

  this.nextPage = function(){
    if (this.isLastPage()) {
      return;
    }
    this.page++;
  };

  this.isLastPage = function () {
    return this.page === this.pageCount();
  };

  this.pageCount = function () {
    return Math.ceil(parseInt(this.itemCount) / parseInt(this.perPage));
  };

  this.offset = function () {
    return this.page * this.perPage;
  };
});
