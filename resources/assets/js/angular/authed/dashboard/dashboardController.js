/**
 * Created by Shane Jansen on 1/25/16.
 */

var DashboardController = function (MainService, AuthedService) {
    var self = this;

    self.initialize(MainService);
    AuthedService.setUserId(5);
    self.test = AuthedService.getData().user.id;
};

DashboardController.prototype.setUserVars = function (AuthedService) {
    // TODO
};

DashboardController.prototype.initialize = function (MainService) {
    var self = this;

    MainService.setToolbarTitle("Dashboard");
};

var module = angular.module('dashboardModule', ['ngMaterial']);
module.controller('DashboardController', [
    'MainService',
    'AuthedService',
    DashboardController
]);
