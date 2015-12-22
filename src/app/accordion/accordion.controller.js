'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class accordion
 * @interface accordion.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 13:56:40 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('accordion', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "accordion";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);