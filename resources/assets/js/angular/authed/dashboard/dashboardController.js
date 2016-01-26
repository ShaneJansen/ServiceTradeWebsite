/**
 * Created by Shane Jansen on 1/25/16.
 */

var DashboardController = function (MainService) {
    var self = this;

    self.initialize(MainService);
};

DashboardController.prototype.initialize = function (MainService) {
    var self = this;

    MainService.setToolbarTitle("Dashboard");
};

var module = angular.module('dashboardModule', ['ngMaterial']);
module.controller('DashboardController', [
    'MainService',
    DashboardController
]);
