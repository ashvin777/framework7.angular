'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabbar
 * @interface tabbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:39:09 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "tabbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);