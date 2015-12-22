'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderParallax
 * @interface slider-parallax.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:34:49 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderParallax', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-parallax";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);