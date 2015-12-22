'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class core
 * @interface core.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:10:13 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('core', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "core";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);