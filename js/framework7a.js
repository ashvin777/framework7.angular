angular.module('framework7a', [])

.service("$AppBootloader",["$rootScope","$compile","$timeout",function($rootScope,$compile,$timeout){

  function AngularCompiler(){

    Dom7(document).on('pageBeforeInit', function (e) {
      $timeout(function(){
        var template = angular.element($(e.target));
        $compile( template )($rootScope);
      });
    });

    // Dom7(document).on('ajaxStart', function (e) {
    //   myApp.showIndicator();
    // });

    // Dom7(document).on('ajaxComplete', function () {
    //   myApp.hideIndicator();
    // });

  }

  return {
    registerAngularCompiler : function(){
      AngularCompiler();
    }
  }
}])

.directive('defineApp',["$rootScope","$window",function($rootScope, $window) {
  return {
      restrict: 'A',
      statusOverlay : '<div class="statusbar-overlay"></div>',
      panelOverlay : '<div class="panel-overlay"></div>',
      compile : function(element,scope){
        var appName = scope.defineApp;
        $window[appName] = new Framework7({
           modalTitle: 'Framework7',
           material: false,
           router : true
        });
        $rootScope.appName = appName;
      }
  };
}])

.directive('defineView',["$rootScope","$window",function($rootScope, $window) {
  return {
      restrict: 'A',
      compile : function(element,scope){
        var viewName = scope.defineView;
        $(element).addClass(viewName);
        $(element).addClass("view");
        if(typeof viewName != "undefined" && viewName != "" && viewName != null){
          $window[viewName] = $window[$rootScope.appName].addView(("."+viewName), {});
        }
      }
  };
}])

.directive('defineCalendar',["$rootScope","$window",function($rootScope, $window) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        var options = scope.$eval(attrs["options"]);
        var inline = attrs["inline"];
        
        if(typeof inline != "undefined"){
          options["container"] = element;
        } else {
          options["input"] = element;
        }

        $window[$rootScope.appName].calendar(options);  
      }
  };
}])

.directive('definePicker',["$rootScope","$window",function($rootScope, $window) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        var options = scope.$eval(attrs["options"]);
        var inline = attrs["inline"];
        var container = attrs["container"];

        if(typeof inline != "undefined"){
          options["input"] = element;
          options["container"] = container;
        } else {
          options["input"] = element;
        }

        console.log(options);

        $window[$rootScope.appName].picker(options);  
      }
  };
}])

.directive('defineInfiniteScroll',["$parse",function($parse) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        Dom7(element).on('infinite', function () {
          var fn = $parse(attrs["onInfiniteScroll"]);
          fn(scope,{
            $event : event
          });
        }); 
      }
  };Picker
}])

.directive('defineVirtualList',["$rootScope","$window",function($rootScope, $window) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var options = scope.$eval(attrs["options"]);
        $window[$rootScope.appName].virtualList(Dom7(element),options);  
      }
  };
}])

.directive('definePullToRefresh',["$parse",function($parse) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        Dom7(element).on('refresh', function () {
          var fn = $parse(attrs["onPullToRefresh"]);
          fn(scope,{
            $event : event
          });
        }); 
      }
  };Picker
}]);