/**
 * Created by Shane Jansen on 1/13/16.
 */

var MainServiceFtn = function () {
    var MainService = {};
    MainService.data = {
        apiUrl: '',
        appName: ''
    };

    // Getters and setters
    MainService.getData = function() {
        return MainService.data;
    };
    MainService.setApiUrl = function(apiUrl) {
        MainService.data.apiUrl = apiUrl;
    };
    MainService.setAppName = function(appName) {
        MainService.data.appName = appName;
    };

    // Helper methods
    MainService.arrayToNl = function(orig) {
        var builder = '';
        var i;
        for (i=0; i<orig.length; i++) {
            if (i == orig.length-1) builder += orig[i];
            else builder += orig[i] + '\n';
        }
        return builder;
    };

    return MainService;
};

var module = angular.module('mainModule');
module.factory('MainService', [MainServiceFtn]);
