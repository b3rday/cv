'use strict';

/* Controllers */

var cvControllers = angular.module('cvControllers', []);

cvControllers.controller('PersonalCtrl', ['$scope', 'Personal',
    function($scope, Personal) {
        $scope.personal = Personal.query();
    }
]);

cvControllers.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.gotoTop = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('top');

            // call $anchorScroll()
            $anchorScroll();
        };
    }
]);
