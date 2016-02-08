/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($window, $cookies, $http, $mdDialog, AuthedService, SkillsService) {
    var self = this;

    self.initialize($window, $cookies, $http, AuthedService);
    self.setClickHandlers($mdDialog, SkillsService);
};

AuthedController.prototype.initialize = function ($window, $cookies, $http, AuthedService) {
    var self = this;

    // Check if cookies are set
    if ($cookies.get('userCreds') == undefined) {
        $window.location.href = '/';
    }

    // Load user data from the cookies
    AuthedService.loadUserData($cookies);

    // Set the default http headers
    $http.defaults.headers.common['X-USER-ID'] = AuthedService.data.user.id;
    $http.defaults.headers.common['X-AUTH-TOKEN'] = AuthedService.data.user.token;

    self.data = AuthedService.getData();
    self.logout = function () {
        AuthedService.forgetStoredData($cookies);
        $window.location.href = '/';
    };
};

AuthedController.prototype.setClickHandlers = function ($mdDialog, SkillsService) {
    var self = this;

    self.showSkillSelectDialog = function () {
        SkillsService.showSkillSelectDialog($mdDialog);
    };
};

var module = angular.module('authedModule', ['ngCookies']);
module.controller('AuthedController', [
    '$window',
    '$cookies',
    '$http',
    '$mdDialog',
    'AuthedService',
    'SkillsService',
    AuthedController
]);
