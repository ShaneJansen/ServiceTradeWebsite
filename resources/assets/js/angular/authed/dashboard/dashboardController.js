/**
 * Created by Shane Jansen on 1/25/16.
 */

var DashboardController = function () {
    var self = this;

    self.initialize();
};

DashboardController.prototype.initialize = function () {
    var self = this;
};

var module = angular.module('dashboardModule', ['ngMaterial']);
module.controller('DashboardController', [
    DashboardController
]);
