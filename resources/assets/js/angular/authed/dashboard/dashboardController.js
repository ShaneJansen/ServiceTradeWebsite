/**
 * Created by Shane Jansen on 1/25/16.
 */

var DashboardController = function ($scope, AuthedService) {
    var self = this;
    self.initialize($scope, AuthedService);
};

DashboardController.prototype.initialize = function ($scope, AuthedService) {
    var self = this;
    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Dashboard');
    });
};

var module = angular.module('dashboardControllerModule', ['availabilityModule']);
module.controller('DashboardController', [
    '$scope',
    'AuthedService',
    DashboardController
]);
