'use strict';

/* Directives */
var cvDirectives = angular.module('cvDirectives', []);

cvDirectives.directive("cvExperience", function() {
    return {
        restrict: "E",
        templateUrl: "partials/cv-experience.html",
        controller: function($scope, $sce, Experience) {
            $scope.$sce = $sce;
            $scope.experiences = Experience.query();
        }
    };
});

cvDirectives.directive("cvSkill", function() {
    return {
        restrict: "E",
        templateUrl: "partials/cv-skill.html",
        controller: function($scope, Skill) {
            $scope.skills = Skill.query();
        }
    };
});
