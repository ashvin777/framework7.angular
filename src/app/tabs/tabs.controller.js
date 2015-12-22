'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabs
 * @interface tabs.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:16 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabs', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "tabs";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);