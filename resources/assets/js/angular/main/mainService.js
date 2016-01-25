/**
 * Created by Shane Jansen on 1/13/16.
 */

var MainServiceFtn = function ($http, $rootScope) {
    var MainService = {};
    MainService.data = {};

    // Application Globals
    MainService.getApiUrl = function() {
        return MainService.data.apiVersion;
    };
    MainService.setApiUrl = function(apiVersion) {
        MainService.data.apiVersion = apiVersion;
    };
    MainService.getAppName = function() {
        return MainService.data.appName;
    };
    MainService.setAppName = function(appName) {
        MainService.data.appName = appName;
    };

    return MainService;
};

var module = angular.module('mainModule');
module.factory('MainService', ['$http', '$rootScope', MainServiceFtn]);
