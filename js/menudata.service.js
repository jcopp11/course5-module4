(function(ng) {
'use strict';

ng.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q'];
function MenuDataService($http, $q) {
    var service = this;

    var basePath = 'https://davids-restaurant.herokuapp.com';

    var shortToLongDeferred = $q.defer();
    var shortToLongPromise = shortToLongDeferred.promise;

    service.getAllCategories = function() {
        return $http.get(basePath + '/categories.json')
                    .then(function(response) {
                        var menuItems = response.data;

                        var shortToLong = {};
                        menuItems.forEach(function(item) {
                            shortToLong[item.short_name] = item.name;
                        });
                        shortToLongDeferred.resolve(shortToLong);

                        return menuItems;
                    })
                    .catch(function() {
                        shortToLongDeferred.resolve({});
                        return [];
                    });
    };

    service.getItemsForCategory = function(shortCategoryName) {
        return $http.get(basePath + '/menu_items.json', {
                        params: { category: shortCategoryName }
                    }).then(function(response) {
                        return response.data.menu_items;
                    }).catch(function() { return []; });
    };

    service.getLongCategoryName =function(shortCategoryName) {
        return shortToLongPromise.then(function(shortToLong) {
            return shortToLong[shortCategoryName];
        });
    }
}

})(angular);