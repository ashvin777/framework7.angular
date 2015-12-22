/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider-3d-cube
 * @interface 3d-cube.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:30:50 GMT+0530 (IST)
 */

describe('Unit: slider-3d-cube', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('slider-3d-cube', {
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