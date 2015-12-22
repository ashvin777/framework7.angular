/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsStatic
 * @interface tabs-static.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:26 GMT+0530 (IST)
 */

describe('Unit: tabsStatic', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tabsStatic', {
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