/**
 * Created by Shane Jansen on 1/24/16.
 */

var IndexServiceFtn = function ($http, $rootScope, MainService) {
    var IndexService = {};
    IndexService.data = {};
    IndexService.data.creds = {};

    // Data
    IndexService.getCreds = function() {
        return IndexService.data.creds;
    };
    IndexService.getError = function() {
        return IndexService.data.error;
    };

    // Network requests
    IndexService.apiCreateUser = function() {
        $http({
            url: MainService.getApiUrl() + 'user',
            method: "POST",
            data: IndexService.getCreds()
        }).then(function successCallback(response) {
            IndexService.data.creds = response.data;
            $rootScope.$broadcast('handlerCreatedUser');
        }, function errorCallback(response) {
            IndexService.data.error = response.data;
            $rootScope.$broadcast('handlerFailedCreateUser');
        });
    };
    IndexService.apiAuthUser = function() {
        $http({
            url: MainService.getApiUrl() + 'user/auth',
            method: "POST",
            data: {
                email: IndexService.data.creds.email,
                password: IndexService.data.creds.password
            }
        }).then(function successCallback(response) {
            IndexService.data.creds = response.data;
            $rootScope.$broadcast('handlerAuthedUser');
        }, function errorCallback(response) {
            IndexService.data.error = response.data;
            $rootScope.$broadcast('handlerFailedAuthUser');
        });
    };

    return IndexService;
};

var module = angular.module('indexModule');
module.factory('IndexService', ['$http', '$rootScope', 'MainService', IndexServiceFtn]);
