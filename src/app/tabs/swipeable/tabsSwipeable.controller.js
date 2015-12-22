'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsSwipeable
 * @interface tabs-swipeable.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:44 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('tabsSwipeable', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "tabs-swipeable";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);