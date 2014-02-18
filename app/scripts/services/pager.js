'use strict';

angular.module('marvelApi').service('Pager', function(){
  this.page      = 1;
  this.perPage   = 50;
  this.itemCount = 0;
  this.data      = [];

  this.nextPage = function(){
    if (this.isLastPage()) {
      return;
    }
    this.page++;
  };

  this.previousPage = function () {
    if (this.isFirstPage()) {
      return;
    }

    this.page--;
  };

  this.firstPage = function () {
    this.page = 1;
  };

  this.lastPage = function () {
    this.page = this.pageCount();
  };

  this.isFirstPage = function () {
    return this.page === 1;
  };

  this.isLastPage = function () {
    return this.page === this.pageCount();
  };

  this.pageCount = function () {
    return Math.ceil(parseInt(this.itemCount) / parseInt(this.rowsPerPage));
  };

  this.offset = function () {
    return this.page * this.perPage;
  };
});
