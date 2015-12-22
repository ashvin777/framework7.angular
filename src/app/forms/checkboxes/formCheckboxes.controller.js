'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formCheckboxes
 * @interface form-checkboxes.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:45:31 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('formCheckboxes', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "form-checkboxes";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);