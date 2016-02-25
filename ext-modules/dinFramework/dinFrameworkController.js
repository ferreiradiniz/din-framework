(function() {
    'use strict';
    angular.module('dinFramework')
        .controller('dinFrameworkController', [dinFrameworkController]);

    function dinFrameworkController() {
        var vm = this;

        vm.name = 'bruno';
    }

}());
