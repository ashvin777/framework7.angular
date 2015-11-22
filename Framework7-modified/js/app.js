angular.module('starter', ["framework7.angular","RootCtrl"])

.run(["$AppBootloader",function($AppBootloader){
    //$AppBootloader.registerAngularCompiler();
}])

.config([function(){
	
}])
.controller("RootCtrl",["$rootScope","$scope",function($rootScope,$scope){
	$rootScope.applicationName = "xyz;"

	$rootScope.options = {};


}])
.controller("AboutCtrl",["$rootScope","$scope",function($rootScope,$scope){
	$rootScope.applicationName = "Hello world";

	$scope.list = ["asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
	"asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd","asdsadsadasd",
		
	]

}]);
