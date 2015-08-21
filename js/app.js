angular.module('dbApp', ["framework7a","dbRootCtrl"])

.run(["$AppBootloader",function($AppBootloader){
    $AppBootloader.registerAngularCompiler();
}])

.config([function(){
	
}]);
