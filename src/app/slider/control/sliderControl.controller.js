'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderControl
 * @interface slider-control.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:31:18 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderControl', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-control";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);