/**
 * Created by Shane Jansen on 1/13/16.
 */

var MainController = function($scope, MainService) {
    var self = this;

    self.initialSetup(MainService);
    self.appName = MainService.getAppName();
};

/**
 * Sets the initial and default variables/values used
 * throughout the current application.
 */
MainController.prototype.initialSetup = function(MainService) {
    // jQuery no conflict
    //$.noConflict();

    MainService.setApiVersion('v1');
    MainService.setAppName('ServiceTrade');
};

var module = angular.module('mainModule', []);
module.controller('MainController', [
    '$scope',
    'MainService',
    MainController
]);
