'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class panels
 * @interface panels.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:41 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('panels', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "panels";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);