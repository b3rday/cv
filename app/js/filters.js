'use strict';

/* Filters */

angular.module('cvFilters', []).filter('tel', function () {
    return function (phoneNumber) {
        if (!phoneNumber)
            return phoneNumber;

        return formatLocal('AU', phoneNumber);
    }
});
