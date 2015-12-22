/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class panels
 * @interface panels.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:41 GMT+0530 (IST)
 */

describe('Unit: panels', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('panels', {
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