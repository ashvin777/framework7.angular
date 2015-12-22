/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider3dCoverflow
 * @interface 3d-coverflow.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:30:11 GMT+0530 (IST)
 */

describe('Unit: slider3dCoverflow', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('slider3dCoverflow', {
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