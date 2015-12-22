'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderLoop
 * @interface slider-loop.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:33:28 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderLoop', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-loop";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);