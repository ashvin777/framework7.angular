'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class dial
 * @interface dial.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:26:48 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('dial', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "dial";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);