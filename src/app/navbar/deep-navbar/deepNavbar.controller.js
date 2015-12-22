'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class deepNavbar
 * @interface deep-navbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:34:24 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('deepNavbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "deep-navbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);