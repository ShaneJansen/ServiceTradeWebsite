/**
 * Created by Shane Jansen on 1/13/16.
 */

var UnauthedApp = function(UnauthedApp) {
    var self = this;

    self.initialize(UnauthedApp);
};

UnauthedApp.prototype.initialize = function(UnauthedApp) {
    UnauthedApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo') // #3F51B5
            .accentPalette('blue') // #2196F3
            .warnPalette('red') // #F44336
            .backgroundPalette('grey')
    });
};

var module = angular.module('unauthedApp', [
    'ngMaterial',
    'mainModule',
    'indexModule'
]);
module.controller('UnauthedApp', [UnauthedApp]);
