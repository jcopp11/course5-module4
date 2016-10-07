(function(ng) {
'use strict';

ng.module('MenuApp')
  .controller('CategoriesController',  CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) { this.categories = categories; }

})(angular);