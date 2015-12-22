'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class noNavbarToolbar
 * @interface no-navbar-toolbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:35:23 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('noNavbarToolbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "no-navbar-toolbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);