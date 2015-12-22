'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class hideOnScroll
 * @interface hide-on-scroll.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:34:45 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('hideOnScroll', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "hide-on-scroll";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);