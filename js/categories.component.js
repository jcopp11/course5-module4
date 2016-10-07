(function(ng) {
'use strict';

ng.module('MenuApp').component('menuCategories', {
    templateUrl: 'templates/categories.html',
    bindings: { categories: '<' }
});

})(angular);