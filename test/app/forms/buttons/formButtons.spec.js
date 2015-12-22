/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formButtons
 * @interface form-buttons.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:43 GMT+0530 (IST)
 */

describe('Unit: formButtons', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('formButtons', {
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