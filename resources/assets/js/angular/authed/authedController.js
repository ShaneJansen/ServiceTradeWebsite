/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($window, $cookies, AuthedService) {
    var self = this;

    self.initialize($window, $cookies, AuthedService);
};

AuthedController.prototype.initialize = function ($window, $cookies, AuthedService) {
    var self = this;

    AuthedService.loadUserData($cookies);

    // Check if cookies are set
    if ($cookies.get('userId') == undefined) {
        $window.location.href = '/';
    }

    self.data = AuthedService.getData();
    self.logout = function () {
        AuthedService.forgetStoredData($cookies);
        $window.location.href = '/';
    };
};

var module = angular.module('authedModule', ['ngCookies']);
module.controller('AuthedController', [
    '$window',
    '$cookies',
    'AuthedService',
    AuthedController
]);
