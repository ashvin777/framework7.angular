/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class deepNavbar3
 * @interface deep-navbar-3.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:33:50 GMT+0530 (IST)
 */

describe('Unit: deepNavbar3', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('deepNavbar3', {
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