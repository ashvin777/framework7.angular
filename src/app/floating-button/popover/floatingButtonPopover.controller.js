'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class floatingButtonPopover
 * @interface popover.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:27:15 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('floatingButtonPopover', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "popover";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);