'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderSpaceBetween
 * @interface slider-space-between.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:35:37 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderSpaceBetween', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-space-between";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);