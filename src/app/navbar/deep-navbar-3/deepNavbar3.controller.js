'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class deepNavbar3
 * @interface deep-navbar-3.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:33:50 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('deepNavbar3', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "deep-navbar-3";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);