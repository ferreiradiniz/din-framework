(function() {
    'use strict';
    angular.module('dinFramework')
        .directive('dinFramework', [dinFramework]);

    function dinFramework() {

        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            templateUrl: 'ext-modules/dinFramework/dinFramework.html',
            controller: 'dinFrameworkController',
            controllerAs: 'dinf'
        };

    }
}());
