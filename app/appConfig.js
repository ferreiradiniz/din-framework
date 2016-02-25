(function() {
    'use strict';
    angular.module('dinApp')
        .config(['$provide', function($provide) {
            $provide.decorator('$exceptionHandler', ['$delegate', function($delegate) {
                return function(exception, cause) {
                    $delegate(exception, cause);
                    alert(exception.message);
                };
            }]);
        }]);
}());

// angular.module('dinApp').config(function($provide) {
//     $provide.decorator("$exceptionHandler", ["$delegate", function($delegate) {
//         return function(exception, cause) {
//             $delegate(exception, cause);
//             //alert(exception.message);
//         };
//     }]);
// });
