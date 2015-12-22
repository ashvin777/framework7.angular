'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderHorizontal
 * @interface slider-horizontal.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:32:47 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderHorizontal', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-horizontal";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);