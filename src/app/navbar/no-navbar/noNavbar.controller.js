'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class noNavbar
 * @interface no-navbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:35:45 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('noNavbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "no-navbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);