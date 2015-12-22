'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class chips
 * @interface chips.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:35 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('chips', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "chips";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);