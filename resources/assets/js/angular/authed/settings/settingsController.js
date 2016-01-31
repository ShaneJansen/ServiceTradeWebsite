/**
 * Created by Shane Jansen on 1/25/16.
 */

var SettingsController = function ($scope, AuthedService) {
    var self = this;

    self.initialize($scope, AuthedService);
};

SettingsController.prototype.initialize = function ($scope, AuthedService) {
    var self = this;

    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Settings');
    });
};

var module = angular.module('settingsModule', []);
module.controller('SettingsController', [
    '$scope',
    'AuthedService',
    SettingsController
]);
