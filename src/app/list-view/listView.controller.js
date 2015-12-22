'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class listView
 * @interface list-view.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:09 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('listView', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "list-view";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);