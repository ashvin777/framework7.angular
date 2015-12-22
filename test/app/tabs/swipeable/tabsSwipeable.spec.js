/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabsSwipeable
 * @interface tabs-swipeable.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:47:44 GMT+0530 (IST)
 */

describe('Unit: tabsSwipeable', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tabsSwipeable', {
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