'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderGallery
 * @interface slider-gallery.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:32:25 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sliderGallery', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
      var swiperTop = window.application.swiper('.ks-swiper-gallery-top', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10
      });
      var swiperThumbs = window.application.swiper('.ks-swiper-gallery-thumbs', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          centeredSlides: true,
          touchRatio: 0.2,
          slideToClickedSlide: true
      });
      swiperTop.params.control = swiperThumbs;
      swiperThumbs.params.control = swiperTop;
    }
]);
