'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class photoBrowser
 * @interface photo-browser.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:07:19 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('photoBrowser', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      /* ===== Photo Browser Examples ===== */
      // Create photoprobsers first:
      var photoBrowserPhotos = [
      	{
      		url: 'img/beach.jpg',
      		caption: 'Amazing beach in Goa, India'
      	},
          'http://placekitten.com/1024/1024',
          'img/lock.jpg',
          {
              url: 'img/monkey.jpg',
              caption: 'I met this monkey in Chinese mountains'
          },
          {
              url: 'img/mountains.jpg',
              caption: 'Beautiful mountains in Zhangjiajie, China'
          }

      ];
      var photoBrowserStandalone = window.application.photoBrowser({
          photos: photoBrowserPhotos
      });
      var photoBrowserPopup = window.application.photoBrowser({
          photos: photoBrowserPhotos,
          type: 'popup'
      });
      var photoBrowserPage = window.application.photoBrowser({
          photos: photoBrowserPhotos,
          type: 'page'
      });
      var photoBrowserDark = window.application.photoBrowser({
          photos: photoBrowserPhotos,
          theme: 'dark'
      });
      var photoBrowserPopupDark = window.application.photoBrowser({
          photos: photoBrowserPhotos,
          theme: 'dark',
          type: 'popup'
      });
      var photoBrowserLazy = window.application.photoBrowser({
          photos: photoBrowserPhotos,
          lazyLoading: true,
          theme: 'dark'
      });
      $$('.ks-pb-standalone').on('click', function () {
          photoBrowserStandalone.open();
      });
      $$('.ks-pb-popup').on('click', function () {
          photoBrowserPopup.open();
      });
      $$('.ks-pb-page').on('click', function () {
          photoBrowserPage.open();
      });
      $$('.ks-pb-popup-dark').on('click', function () {
          photoBrowserPopupDark.open();
      });
      $$('.ks-pb-standalone-dark').on('click', function () {
          photoBrowserDark.open();
      });
      $$('.ks-pb-lazy').on('click', function () {
          photoBrowserLazy.open();
      });
    }
]);
