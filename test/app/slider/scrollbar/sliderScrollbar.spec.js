/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderScrollbar
 * @interface slider-scrollbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:35:19 GMT+0530 (IST)
 */

describe('Unit: sliderScrollbar', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('sliderScrollbar', {
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