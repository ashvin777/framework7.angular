'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class about
 * @interface about.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 13:56:28 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('about', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "about";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);