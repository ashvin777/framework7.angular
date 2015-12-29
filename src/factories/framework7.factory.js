'use strict';

/**

 Created By : root
 Creation Date : Tue Dec 29 2015 19:15:56 GMT+0530 (IST)
 Helper Name : framework7
 Description : framework7

 */
angular.module('f7.factories')

.provider('framework7', [
  function() {
    this.$get = function(){
      window.application = new Framework7({
        modalTitle: 'Framework7',
        material: true,
      });
      window.$$ = Dom7;
      return this;
    };

    this.getInstance = function(){
      return window.application;
    };
  }
]);
