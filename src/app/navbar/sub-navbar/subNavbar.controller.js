'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class subNavbar
 * @interface sub-navbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:37:03 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('subNavbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "sub-navbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);