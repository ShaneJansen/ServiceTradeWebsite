/**
 * Created by Shane Jansen on 1/25/16.
 */

var DashboardController = function ($scope, AuthedService, DashboardService) {
    var self = this;

    self.initialize($scope, AuthedService, DashboardService);
};

DashboardController.prototype.initialize = function ($scope, AuthedService, DashboardService) {
    var self = this;

    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Dashboard');
    });

    DashboardService.apiGetUserAvailabilities(null, null);

    self.data = DashboardService.getData();
};

var module = angular.module('dashboardModule', []);
module.controller('DashboardController', [
    '$scope',
    'AuthedService',
    'DashboardService',
    DashboardController
]);
