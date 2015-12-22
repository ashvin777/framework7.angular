/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsAnimated
 * @interface animated.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:13 GMT+0530 (IST)
 */

describe('Unit: tabsAnimated', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tabsAnimated', {
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