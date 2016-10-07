(function(ng) {
'use strict';

ng.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
    }).state('categories', {
        url: '/categories',
        template: '<menu-categories categories="catCtrl.categories">'
                  + '</menu-categories>',
        controller: 'CategoriesController as catCtrl',
        resolve: {
            categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    }).state('items', {
        url: '/items/{category}',
        template: '<category-items items="itemsCtrl.items" '
                  + 'category="{{ itemsCtrl.category }}"></category-items>',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
            category: ['MenuDataService', '$stateParams',
                function(MenuDataService, $stateParams) {
                    return MenuDataService.getLongCategoryName(
                        $stateParams.category
                    );
                }
            ],
            items: ['MenuDataService', '$stateParams',
                function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory(
                        $stateParams.category
                    );
                }
            ]
        }
    });
};

})(angular);