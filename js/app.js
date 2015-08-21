angular.module('starter', ["framework7.angular","RootCtrl"])

.run(["$AppBootloader",function($AppBootloader){
    $AppBootloader.registerAngularCompiler();
}])

.config([function(){
	
}]);
