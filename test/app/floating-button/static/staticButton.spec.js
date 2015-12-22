/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class staticButton
 * @interface static-button.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:27:49 GMT+0530 (IST)
 */

describe('Unit: staticButton', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('staticButton', {
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