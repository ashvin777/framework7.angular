'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderScrollbar
 * @interface slider-scrollbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:35:19 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderScrollbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-scrollbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);