/*global angular*/
'use strict';

/**
 * @module f7
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 13:56:06 GMT+0530 (IST)
 */

// init modules, module names equal to folder structure
angular.module('f7.app', []); // view controllers etc.
angular.module('f7.services', []); // services
angular.module('f7.filters', []); // filter
angular.module('f7.factories', []); // helper
angular.module('f7.directives', []); // directives

angular.module('f7.libs', ['ui.router']);

angular.module('f7', ['f7.services', 'f7.filters', 'f7.factories', 'f7.directives', 'f7.app', 'f7.libs'])

.run(['framework7',function(framework7) {
  window.applicationInstance = framework7.getInstance();
}])

.constant('Config', {
  constantVariables: 'constantValue'
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'src/app/app.html'
      })
      .state('app.about', {
        url: '/about',
        views: {
          AppContent: {
            templateUrl: 'src/app/about/about.html',
            controller: 'about'
          }
        }
      })
      .state('app.accordion', {
        url: '/accordion',
        views: {
          AppContent: {
            templateUrl: 'src/app/accordion/accordion.html',
            controller: 'accordion'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          AppContent: {
            templateUrl: 'src/app/home/home.html',
            controller: 'home'
          }
        }
      })
      .state('app.autocomplete', {
        url: '/autocomplete',
        views: {
          AppContent: {
            templateUrl: 'src/app/autocomplete/autocomplete.html',
            controller: 'autocomplete'
          }
        }
      })
      .state('app.calendar', {
        url: '/calendar',
        views: {
          AppContent: {
            templateUrl: 'src/app/calendar/calendar.html',
            controller: 'calendar'
          }
        }
      })
      .state('app.cards', {
        url: '/cards',
        views: {
          AppContent: {
            templateUrl: 'src/app/cards/cards.html',
            controller: 'cards'
          }
        }
      })
      .state('app.contacts', {
        url: '/contacts',
        views: {
          AppContent: {
            templateUrl: 'src/app/contacts/contacts.html',
            controller: 'contacts'
          }
        }
      })
      .state('app.chips', {
        url: '/chips',
        views: {
          AppContent: {
            templateUrl: 'src/app/chips/chips.html',
            controller: 'chips'
          }
        }
      })
      .state('app.floatingButton', {
        url: '/floatingButton',
        views: {
          AppContent: {
            templateUrl: 'src/app/floating-button/floating-button.html',
            controller: 'floatingButton'
          }
        }
      })
      .state('app.forms', {
        url: '/forms',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/forms.html',
            controller: 'forms'
          }
        }
      })
      .state('app.grid', {
        url: '/grid',
        views: {
          AppContent: {
            templateUrl: 'src/app/grid/grid.html',
            controller: 'grid'
          }
        }
      })
      .state('app.infiniteScroll', {
        url: '/infiniteScroll',
        views: {
          AppContent: {
            templateUrl: 'src/app/infinite-scroll/infinite-scroll.html',
            controller: 'infiniteScroll'
          }
        }
      })
      .state('app.lazyLoading', {
        url: '/lazyLoading',
        views: {
          AppContent: {
            templateUrl: 'src/app/lazy-loading/lazy-loading.html',
            controller: 'lazyLoading'
          }
        }
      })
      .state('app.listView', {
        url: '/listView',
        views: {
          AppContent: {
            templateUrl: 'src/app/list-view/list-view.html',
            controller: 'listView'
          }
        }
      })
      .state('app.loginScreen', {
        url: '/loginScreen',
        views: {
          AppContent: {
            templateUrl: 'src/app/login-screen/login-screen.html',
            controller: 'loginScreen'
          }
        }
      })
      .state('app.mediaList', {
        url: '/mediaList',
        views: {
          AppContent: {
            templateUrl: 'src/app/media-list/media-list.html',
            controller: 'mediaList'
          }
        }
      })
      .state('app.messages', {
        url: '/messages',
        views: {
          AppContent: {
            templateUrl: 'src/app/messages/messages.html',
            controller: 'messages'
          }
        }
      })
      .state('app.modals', {
        url: '/modals',
        views: {
          AppContent: {
            templateUrl: 'src/app/modals/modals.html',
            controller: 'modals'
          }
        }
      })
      .state('app.navbar', {
        url: '/navbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/navbar.html',
            controller: 'navbar'
          }
        }
      })
      .state('app.notifications', {
        url: '/notifications',
        views: {
          AppContent: {
            templateUrl: 'src/app/notifications/notifications.html',
            controller: 'notifications'
          }
        }
      })
      .state('app.photoBrowser', {
        url: '/photoBrowser',
        views: {
          AppContent: {
            templateUrl: 'src/app/photobrowser/photo-browser.html',
            controller: 'photoBrowser'
          }
        }
      })
      .state('app.picker', {
        url: '/picker',
        views: {
          AppContent: {
            templateUrl: 'src/app/picker/picker.html',
            controller: 'picker'
          }
        }
      })
      .state('app.popover', {
        url: '/popover',
        views: {
          AppContent: {
            templateUrl: 'src/app/popover/popover.html',
            controller: 'popover'
          }
        }
      })
      .state('app.preloader', {
        url: '/preloader',
        views: {
          AppContent: {
            templateUrl: 'src/app/preloader/preloader.html',
            controller: 'preloader'
          }
        }
      })
      .state('app.progress', {
        url: '/progress',
        views: {
          AppContent: {
            templateUrl: 'src/app/progress/progress.html',
            controller: 'progress'
          }
        }
      })
      .state('app.pullToRefresh', {
        url: '/pullToRefresh',
        views: {
          AppContent: {
            templateUrl: 'src/app/pull-to-refresh/pull-to-refresh.html',
            controller: 'pullToRefresh'
          }
        }
      })
      .state('app.search', {
        url: '/search',
        views: {
          AppContent: {
            templateUrl: 'src/app/search/search.html',
            controller: 'search'
          }
        }
      })
      .state('app.panels', {
        url: '/panels',
        views: {
          AppContent: {
            templateUrl: 'src/app/panels/panels.html',
            controller: 'panels'
          }
        }
      })
      .state('app.sortList', {
        url: '/sortList',
        views: {
          AppContent: {
            templateUrl: 'src/app/sort-list/sort-list.html',
            controller: 'sortList'
          }
        }
      })
      .state('app.swipe', {
        url: '/swipe',
        views: {
          AppContent: {
            templateUrl: 'src/app/swipe/swipe.html',
            controller: 'swipe'
          }
        }
      })
      .state('app.slider', {
        url: '/slider',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/slider.html',
            controller: 'slider'
          }
        }
      })
      .state('app.tabs', {
        url: '/tabs',
        views: {
          AppContent: {
            templateUrl: 'src/app/tabs/tabs.html',
            controller: 'tabs'
          }
        }
      })
      .state('app.virtualList', {
        url: '/virtualList',
        views: {
          AppContent: {
            templateUrl: 'src/app/virtual-list/virtual-list.html',
            controller: 'virtualList'
          }
        }
      })
      .state('app.colorTheme', {
        url: '/colorTheme',
        views: {
          AppContent: {
            templateUrl: 'src/app/color-theme/color-theme.html',
            controller: 'colorTheme'
          }
        }
      })
      .state('app.dynamically', {
        url: '/dynamically',
        views: {
          AppContent: {
            templateUrl: 'src/app/dynamically/dynamically.html',
            controller: 'dynamically'
          }
        }
      })
      .state('app.core', {
        url: '/core',
        views: {
          AppContent: {
            templateUrl: 'src/app/core/core.html',
            controller: 'core'
          }
        }
      })
      .state('app.formElements', {
        url: '/formElements',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/elements/form-elements.html',
            controller: 'formElements'
          }
        }
      })
      .state('app.formCheckboxes', {
        url: '/formCheckboxes',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/checkboxes/form-checkboxes.html',
            controller: 'formCheckboxes'
          }
        }
      })
      .state('app.formSelects', {
        url: '/formSelects',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/selects/form-selects.html',
            controller: 'formSelects'
          }
        }
      })
      .state('app.formButtons', {
        url: '/formButtons',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/buttons/form-buttons.html',
            controller: 'formButtons'
          }
        }
      })
      .state('app.formStorage', {
        url: '/formStorage',
        views: {
          AppContent: {
            templateUrl: 'src/app/forms/storage/form-storage.html',
            controller: 'formStorage'
          }
        }
      })
      .state('app.loginScreenEmbedded', {
        url: '/loginScreenEmbedded',
        views: {
          AppContent: {
            templateUrl: 'src/app/login-screen/embedded/login-screen-embedded.html',
            controller: 'loginScreenEmbedded'
          }
        }
      })
      .state('app.dial', {
        url: '/dial',
        views: {
          AppContent: {
            templateUrl: 'src/app/floating-button/dial/dial.html',
            controller: 'dial'
          }
        }
      })
      .state('app.floatingButtonPopover', {
        url: '/floatingButtonPopover',
        views: {
          AppContent: {
            templateUrl: 'src/app/floating-button/popover/popover.html',
            controller: 'floatingButtonPopover'
          }
        }
      })
      .state('app.staticButton', {
        url: '/staticButton',
        views: {
          AppContent: {
            templateUrl: 'src/app/floating-button/static/static-button.html',
            controller: 'staticButton'
          }
        }
      })
      .state('app.deepNavbar2', {
        url: '/deepNavbar2',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/deep-navbar-2/deep-navbar-2.html',
            controller: 'deepNavbar2'
          }
        }
      })
      .state('app.deepNavbar3', {
        url: '/deepNavbar3',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/deep-navbar-3/deep-navbar-3.html',
            controller: 'deepNavbar3'
          }
        }
      })
      .state('app.deepNavbar', {
        url: '/deepNavbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/deep-navbar/deep-navbar.html',
            controller: 'deepNavbar'
          }
        }
      })
      .state('app.hideOnScroll', {
        url: '/hideOnScroll',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/hide-on-scroll/hide-on-scroll.html',
            controller: 'hideOnScroll'
          }
        }
      })
      .state('app.navbarHide', {
        url: '/navbarHide',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/hide/hide.html',
            controller: 'navbarHide'
          }
        }
      })
      .state('app.noNavbarToolbar', {
        url: '/noNavbarToolbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/no-navbar-toolbar/no-navbar-toolbar.html',
            controller: 'noNavbarToolbar'
          }
        }
      })
      .state('app.noNavbar', {
        url: '/noNavbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/no-navbar/no-navbar.html',
            controller: 'noNavbar'
          }
        }
      })
      .state('app.noToolbar', {
        url: '/noToolbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/no-toolbar/no-toolbar.html',
            controller: 'noToolbar'
          }
        }
      })
      .state('app.subNavbarTitle', {
        url: '/subNavbarTitle',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/sub-navbar-title/sub-navbar-title.html',
            controller: 'subNavbarTitle'
          }
        }
      })
      .state('app.subNavbar', {
        url: '/subNavbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/sub-navbar/sub-navbar.html',
            controller: 'subNavbar'
          }
        }
      })
      .state('app.tabbarLabels', {
        url: '/tabbarLabels',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/tabbar-labels/tabbar-labels.html',
            controller: 'tabbarLabels'
          }
        }
      })
      .state('app.tabbarScrollable', {
        url: '/tabbarScrollable',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/tabbar-scrollable/tabbar-scrollable.html',
            controller: 'tabbarScrollable'
          }
        }
      })
      .state('app.toolbarBottom', {
        url: '/toolbarBottom',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/toolbar-bottom/toolbar-bottom.html',
            controller: 'toolbarBottom'
          }
        }
      })
      .state('app.tabbar', {
        url: '/tabbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/navbar/tabbar/tabbar.html',
            controller: 'tabbar'
          }
        }
      })
      .state('app.tabsAnimated', {
        url: '/tabsAnimated',
        views: {
          AppContent: {
            templateUrl: 'src/app/tabs/animated/animated.html',
            controller: 'tabsAnimated'
          }
        }
      })
      .state('app.tabsStatic', {
        url: '/tabsStatic',
        views: {
          AppContent: {
            templateUrl: 'src/app/tabs/static/tabs-static.html',
            controller: 'tabsStatic'
          }
        }
      })
      .state('app.tabsSwipeable', {
        url: '/tabsSwipeable',
        views: {
          AppContent: {
            templateUrl: 'src/app/tabs/swipeable/tabs-swipeable.html',
            controller: 'tabsSwipeable'
          }
        }
      })
      .state('app.slider3dCoverflow', {
        url: '/slider3dCoverflow',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/3d-coverflow/3d-coverflow.html',
            controller: 'slider3dCoverflow'
          }
        }
      })
      .state('app.slider3dCube', {
        url: '/slider3dCube',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/3d-cube/3d-cube.html',
            controller: 'slider3dCube'
          }
        }
      })
      .state('app.sliderControl', {
        url: '/sliderControl',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/control/slider-control.html',
            controller: 'sliderControl'
          }
        }
      })
      .state('app.sliderCustom', {
        url: '/sliderCustom',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/custom/slider-custom.html',
            controller: 'slider-custom'
          }
        }
      })
      .state('app.sliderFade', {
        url: '/sliderFade',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/fade/slider-fade.html',
            controller: 'slider-fade'
          }
        }
      })
      .state('app.sliderGallery', {
        url: '/sliderGallery',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/gallery/slider-gallery.html',
            controller: 'sliderGallery'
          }
        }
      })
      .state('app.sliderHorizontal', {
        url: '/sliderHorizontal',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/horizontal/slider-horizontal.html',
            controller: 'sliderHorizontal'
          }
        }
      })
      .state('app.sliderLoop', {
        url: '/sliderLoop',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/loop/slider-loop.html',
            controller: 'sliderLoop'
          }
        }
      })
      .state('app.sliderMultiple', {
        url: '/sliderMultiple',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/mulitple/slider-multiple.html',
            controller: 'sliderMultiple'
          }
        }
      })
      .state('app.sliderNested', {
        url: '/sliderNested',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/nested/slider-nested.html',
            controller: 'sliderNested'
          }
        }
      })
      .state('app.sliderParallax', {
        url: '/sliderParallax',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/parallax/slider-parallax.html',
            controller: 'sliderParallax'
          }
        }
      })
      .state('app.sliderScrollbar', {
        url: '/sliderScrollbar',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/scrollbar/slider-scrollbar.html',
            controller: 'sliderScrollbar'
          }
        }
      })
      .state('app.sliderSpaceBetween', {
        url: '/sliderSpaceBetween',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/space-between/slider-space-between.html',
            controller: 'sliderSpaceBetween'
          }
        }
      })
      .state('app.sliderVertical', {
        url: '/sliderVertical',
        views: {
          AppContent: {
            templateUrl: 'src/app/slider/vertical/slider-vertical.html',
            controller: 'sliderVertical'
          }
        }
      })
      //~!states!~
    $urlRouterProvider.otherwise("/app/home");
  })
  .controller('root.controller', ['$rootScope','$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('state changed');
      //window.app = new Framework7();
      setTimeout(function() {
        window.application.initPage($('.pages'));
      });
    });
    $rootScope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams) {

    });
    $rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams) {

    });
  }]);
