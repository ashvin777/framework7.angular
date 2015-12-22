/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderSpaceBetween
 * @interface slider-space-between.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:35:37 GMT+0530 (IST)
 */

describe('Unit: sliderSpaceBetween', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('sliderSpaceBetween', {
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