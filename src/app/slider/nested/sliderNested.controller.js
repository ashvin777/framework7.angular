'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderNested
 * @interface slider-nested.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:34:20 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderNested', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-nested";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);