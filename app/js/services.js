'use strict';

/* Services */

var cvServices = angular.module('cvServices', ['ngResource']);

cvServices.factory('Personal', ['$resource',
    function($resource) {
        return $resource('data/personal.json', {}, {
            query: {}
        });
    }
]);

cvServices.factory('Experience', ['$resource',
    function($resource) {
        return $resource('data/experiences.json', {}, {
            query: {
                isArray: true
            }
        });
    }
]);

cvServices.factory('Skill', ['$resource',
    function($resource) {
        return $resource('data/skills.json', {}, {
            query: {
                isArray: true
            }
        });
    }
]);
