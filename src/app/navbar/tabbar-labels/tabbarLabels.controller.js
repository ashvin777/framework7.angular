'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabbarLabels
 * @interface tabbar-labels.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:37:27 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabbarLabels', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "tabbar-labels";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);