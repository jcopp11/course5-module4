(function(ng) {
'use strict';

ng.module('MenuApp').controller('ItemsController', ItemsController);

ItemsController.$inject = ['category', 'items'];
function ItemsController(category, items) {
    this.category = category;
    this.items = items;
}

})(angular);