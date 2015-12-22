/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderControl
 * @interface slider-control.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:31:18 GMT+0530 (IST)
 */

describe('Unit: sliderControl', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('sliderControl', {
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