'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class deepNavbar2
 * @interface deep-navbar-2.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:33:11 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('deepNavbar2', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "deep-navbar-2";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);