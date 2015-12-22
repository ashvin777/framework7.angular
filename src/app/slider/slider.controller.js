'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider
 * @interface slider.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:08 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('slider', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);