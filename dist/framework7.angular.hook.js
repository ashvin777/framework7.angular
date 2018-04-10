Framework7.prototype.plugins.angular = function (app, params) {
  function compile(newPage) {
    try {
      var $page = $(newPage);
      var injector = angular.element(document).injector();
      if (injector && $page ) {
        var $compile = injector.invoke(['$compile', function ($compile) { return $compile; }]);
        var $timeout = injector.invoke(['$timeout', function ($timeout) { return $timeout; }]);
        var $scope = injector.invoke(['$rootScope', function ($rootScope) { return $rootScope; }]);
        $scope = $scope.$$childHead;
        $timeout(function () {
          $compile($page)($scope);
        });
      }
    } catch (e) {
      console.error("Some Error Occured While Compiling The Template", e);
    }
  }

  function removeOldPage(pageData) {
    var $oldPage = $(".views .view .pages .page").not($(pageData.container));
    if ($oldPage.length > 0) {
      var controllerName = $oldPage.attr("ng-controller");
      var $scope = angular.element('[ng-controller="' + controllerName + '"]').scope();
      if ($scope) {
        $scope.$destroy();
        $oldPage.remove();
      }
    }
  }

  return {
    hooks: {
      navbarInit: function (navbar, pageData) {
        compile(navbar.container);
      },
      pageInit: function (pageData) {
        compile(pageData.container);
      },
      pageAfterAnimation: function (pageData) {
        removeOldPage(pageData);
      }
    }
  }
};
