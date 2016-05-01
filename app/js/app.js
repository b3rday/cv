'use strict';

/* App Module */

var cvApp = angular.module('cvApp', [
    'ngRoute',
    'cvControllers',
    'cvDirectives',
    'cvFilters',
    'cvServices'
]);

cvApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/partials', {
        templateUrl: 'partials/cv-detail.html'
    }).
    otherwise({
        redirectTo: '/partials'
    });
}]);
