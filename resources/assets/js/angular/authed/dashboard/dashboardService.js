/**
 * Created by Shane Jansen on 1/13/16.
 */

var DashboardServiceFtn = function ($http, MainService) {
    var DashboardService = {};
    DashboardService.data = {
        availabilities: ''
    };

    // Getters and setters
    DashboardService.getData = function() {
        return DashboardService.data;
    };

    // Network requests
    DashboardService.apiGetUserAvailabilities = function (success, failure) {
        $http({
            url: MainService.getData().apiUrl + 'user/availabilities',
            method: 'GET'
        }).then(function successCallback(response) {
            DashboardService.data.availabilities = response.data;
            if (success != null) success();
        }, function errorCallback(response) {
            if (failure != null) failure();
        });
    };

    return DashboardService;
};

var module = angular.module('dashboardModule');
module.factory('DashboardService', ['$http', 'MainService', DashboardServiceFtn]);
