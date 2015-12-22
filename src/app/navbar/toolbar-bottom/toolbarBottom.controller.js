'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class toolbarBottom
 * @interface toolbar-bottom.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:38:09 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('toolbarBottom', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "toolbar-bottom";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);