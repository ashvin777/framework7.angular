'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class noToolbar
 * @interface no-toolbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:36:05 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('noToolbar', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "no-toolbar";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);