'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formSelects
 * @interface form-selects.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:22 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('formSelects', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "form-selects";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);