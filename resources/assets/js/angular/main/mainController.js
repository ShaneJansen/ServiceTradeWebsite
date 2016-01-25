/**
 * Created by Shane Jansen on 1/13/16.
 */

var MainController = function($scope, $location, MainService) {
    var self = this;

    self.initialSetup($location, MainService);
    self.appName = MainService.getAppName();
};

/**
 * Sets the initial and default variables/values used
 * throughout the current application.
 */
MainController.prototype.initialSetup = function($location, MainService) {
    // jQuery no conflict
    //$.noConflict();

    var apiUrl = $location.protocol() + '://api.' +  $location.host() + '/';

    MainService.setApiUrl(apiUrl);
    MainService.setAppName('ServiceTrade');
};

var module = angular.module('mainModule', []);
module.controller('MainController', [
    '$scope',
    '$location',
    'MainService',
    MainController
]);
