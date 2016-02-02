/**
 * Created by Shane Jansen on 1/24/16.
 */

var IndexServiceFtn = function ($http, MainService) {
    var IndexService = {};
    IndexService.data = {
        login: {
            creds: {
                // TODO
                email: 'sjjansen100@gmail.com',
                password: 'mypass'
            },
            error: ''
        },
        register: {
            creds: {},
            error: ''
        }
    };

    // Getters and setters
    IndexService.getData = function() {
        return IndexService.data;
    };

    // Network requests
    IndexService.apiCreateUser = function(success, failure) {
        $http({
            url: MainService.getData().apiUrl + 'user',
            method: 'POST',
            data: {
                firstName: IndexService.data.register.creds.firstName,
                lastName: IndexService.data.register.creds.lastName,
                email: IndexService.data.register.creds.email,
                password: IndexService.data.register.creds.password
            }
        }).then(function successCallback(response) {
            IndexService.data.register.creds = response.data;
            success();
        }, function errorCallback(response) {
            IndexService.data.register.error = response.data;
            failure();
        });
    };
    IndexService.apiAuthUser = function(success, failure) {
        $http({
            url: MainService.getData().apiUrl + 'user/auth',
            method: 'POST',
            data: {
                email: IndexService.data.login.creds.email,
                password: IndexService.data.login.creds.password
            }
        }).then(function successCallback(response) {
            IndexService.data.login.creds = response.data;
            success();
        }, function errorCallback(response) {
            IndexService.data.login.error = response.data;
            failure();
        });
    };

    // Functions
    IndexService.showLoginDialog = function ($mdDialog) {
        $mdDialog.show({
            controller: 'LoginDialogController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/unauthed/dialogLogin.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            closeTo: (document.querySelector('#login'))
        });
    };
    IndexService.showRegisterDialog = function ($mdDialog) {
        $mdDialog.show({
            controller: 'RegisterDialogController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/unauthed/dialogRegister.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            closeTo: (document.querySelector('#register'))
        });
    };
    IndexService.showForgotDialog = function ($mdDialog) {
        $mdDialog.show({
            controller: 'ForgotDialogController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/unauthed/dialogForgot.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        });
    };
    IndexService.setUserCreds = function ($cookies, creds) {
        $cookies.put('userCreds', JSON.stringify(creds));
    };

    return IndexService;
};

var module = angular.module('indexModule');
module.factory('IndexService', ['$http', 'MainService', IndexServiceFtn]);
