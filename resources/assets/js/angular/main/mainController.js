/**
 * Created by Shane Jansen on 1/13/16.
 */

var MainController = function($scope, $location, $mdSidenav, MainService) {
    var self = this;

    self.initialize($location, MainService);
    self.setClickHandlers($mdSidenav);
    self.data = MainService.getData();
};

/**
 * Sets the initial and default variables/values used
 * throughout the current application.
 */
MainController.prototype.initialize = function($location, MainService) {
    // jQuery no conflict
    //$.noConflict();

    var location = $location.host();
    location = location.replace("www.", "");
    var apiUrl = $location.protocol() + '://api.' +  location + '/';

    MainService.setApiUrl(apiUrl);
    MainService.setAppName('ServiceTrade (Alpha)');
};

MainController.prototype.setClickHandlers = function($mdSidenav) {
    var self = this;

    self.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
};

var module = angular.module('mainModule', ['ngMaterial']);
module.controller('MainController', [
    '$scope',
    '$location',
    '$mdSidenav',
    'MainService',
    MainController
]);
