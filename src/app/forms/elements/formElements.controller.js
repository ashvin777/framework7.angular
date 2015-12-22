'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formElements
 * @interface form-elements.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:42:06 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('formElements', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "form-elements";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);