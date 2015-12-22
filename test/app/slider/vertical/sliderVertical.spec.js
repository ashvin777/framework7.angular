/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderVertical
 * @interface slider-vertical.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:36:01 GMT+0530 (IST)
 */

describe('Unit: sliderVertical', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('sliderVertical', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})