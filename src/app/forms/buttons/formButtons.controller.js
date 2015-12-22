'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formButtons
 * @interface form-buttons.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:43 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('formButtons', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "form-buttons";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);