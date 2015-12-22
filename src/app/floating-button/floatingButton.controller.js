'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class floatingButton
 * @interface floating-button.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:44 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('floatingButton', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "floating-button";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);