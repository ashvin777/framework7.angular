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
    var self = this;
    this.application = null;
    this.viewInstances = {};

    this.$get = function() {
      return this;
    };

    this.register = function(config) {
      self.application = new Framework7(config);
      window.$$ = Dom7;
      return self.application;
    };

    this.getInstance = function() {
      return self.application;
    };

    this.registerView = function(instance, selector, config) {
      if(typeof this.viewInstances[instance] == undefined){
        return this.viewInstances[instance] = this.getInstance().addView(selector, {});
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
          setTimeout(function() {
            self.getInstance().initPage($('.pages'));
          });
        });
      } else {
        return this.viewInstances[instance];
      }
    };

    this.getViewInstance = function(instance){
      return this.viewInstances[instance];
    };
  }
]);
