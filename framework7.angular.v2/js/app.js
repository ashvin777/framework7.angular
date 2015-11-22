angular.module('starter', ["framework7.angular"])

.controller("StarterController", ["$rootScope", "$scope",
    function($rootScope, $scope) {
        $scope.starterAppConfig = {
            modalTitle: 'Framework 1 7',
            material: false,
            router: true,
            swipePanel: 'left',
            debug: true
        }
    }
])

.directive("leftPanel",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/panels/left-panel.html"
	}
}])

.directive("rightPanel",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/panels/right-panel.html"
	}
}])

.directive("appViews",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/views/views.html"
	}
}])

.directive("mainView",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/views/main/main-view.html"
	}
}])

.directive("loadTemplate",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl: function(elem, attr){
           return attr.url;
        }
	}
}])