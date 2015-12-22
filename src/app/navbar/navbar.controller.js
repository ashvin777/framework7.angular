'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class navbar
 * @interface navbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:59 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('navbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "navbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);