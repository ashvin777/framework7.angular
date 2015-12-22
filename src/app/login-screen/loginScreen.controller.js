'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class loginScreen
 * @interface login-screen.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:18 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('loginScreen', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "login-screen";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);