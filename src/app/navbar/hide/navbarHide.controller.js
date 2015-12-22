'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class navbarHide
 * @interface hide.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:35:02 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('navbarHide', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "hide";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);