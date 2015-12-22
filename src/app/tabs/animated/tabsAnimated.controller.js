'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsAnimated
 * @interface animated.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:13 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabsAnimated', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "animated";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);