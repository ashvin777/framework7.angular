'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class progress
 * @interface progress.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:05 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('progress', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.ks-demo-progressbar-inline .button').on('click', function () {
          var progress = $$(this).attr('data-progress');
          var progressbar = $$('.ks-demo-progressbar-inline .progressbar');
          window.application.setProgressbar(progressbar, progress);
      });
      $$('.ks-demo-progressbar-load-hide .button').on('click', function () {
          var container = $$('.ks-demo-progressbar-load-hide p:first-child');
          if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading

          window.application.showProgressbar(container, 0);

          // Simluate Loading Something
          var progress = 0;
          function simulateLoading() {
              setTimeout(function () {
                  var progressBefore = progress;
                  progress += Math.random() * 20;
                  window.application.setProgressbar(container, progress);
                  if (progressBefore < 100) {
                      simulateLoading(); //keep 'loading'
                  }
                  else window.application.hideProgressbar(container); //hide
              }, Math.random() * 200 + 200);
          }
          simulateLoading();
      });
      $$('.ks-demo-progressbar-overlay .button').on('click', function () {
          // Add Directly To Body
          var container = $$('body');
          if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading

          window.application.showProgressbar(container, 0, 'yellow');

          // Simluate Loading Something
          var progress = 0;
          function simulateLoading() {
              setTimeout(function () {
                  var progressBefore = progress;
                  progress += Math.random() * 20;
                  window.application.setProgressbar(container, progress);
                  if (progressBefore < 100) {
                      simulateLoading(); //keep 'loading'
                  }
                  else window.application.hideProgressbar(container); //hide
              }, Math.random() * 200 + 200);
          }
          simulateLoading();
      });
      $$('.ks-demo-progressbar-infinite-overlay .button').on('click', function () {
          var container = $$('body');
          if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
          window.application.showProgressbar(container, 'yellow');
          setTimeout(function () {
              window.application.hideProgressbar();
          }, 5000);
      });
      $$('.ks-demo-progressbar-infinite-multi-overlay .button').on('click', function () {
          var container = $$('body');
          if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
          window.application.showProgressbar(container, 'multi');
          setTimeout(function () {
              window.application.hideProgressbar();
          }, 5000);
      });
    }
]);
