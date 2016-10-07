(function(ng) {
'use strict';

ng.module('MenuApp').component('categoryItems', {
    templateUrl: 'templates/items.html',
    bindings: {
        category: '@',
        items: '<'
    }
});

})(angular);