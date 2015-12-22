'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsStatic
 * @interface tabs-static.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:26 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabsStatic', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "tabs-static";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);