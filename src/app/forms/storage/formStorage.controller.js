'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formStorage
 * @interface form-storage.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:58 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('formStorage', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "form-storage";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);