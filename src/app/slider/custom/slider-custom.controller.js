'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider-custom
 * @interface slider-custom.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:31:36 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('slider-custom', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-custom";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);