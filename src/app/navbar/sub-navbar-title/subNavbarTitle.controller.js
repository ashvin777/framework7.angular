'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class subNavbarTitle
 * @interface sub-navbar-title.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:36:44 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('subNavbarTitle', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "sub-navbar-title";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);