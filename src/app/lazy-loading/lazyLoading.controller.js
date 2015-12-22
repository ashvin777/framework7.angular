'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class lazyLoading
 * @interface lazy-loading.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:05:54 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('lazyLoading', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "lazy-loading";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);