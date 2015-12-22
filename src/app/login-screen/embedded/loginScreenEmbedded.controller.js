'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class loginScreenEmbedded
 * @interface login-screen-embedded.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:56:16 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('loginScreenEmbedded', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "login-screen-embedded";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);