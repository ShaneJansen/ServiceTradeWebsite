/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($window, $cookies, $mdDialog, $http, AuthedService) {
    var self = this;

    self.initialize($window, $cookies, $mdDialog, $http, AuthedService);
    self.setClickHandlers($window, $cookies, AuthedService);
};
AuthedController.prototype.initialize = function ($window, $cookies, $mdDialog, $http, AuthedService) {
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

    // Set scope data
    self.data = AuthedService.getData();

    // Check for first login
    if (self.data.user.firstLogin == 0) {
        AuthedService.showTutorialDialog($mdDialog);
    }
};
AuthedController.prototype.setClickHandlers = function ($window, $cookies, AuthedService) {
    var self = this;

    self.logout = function () {
        AuthedService.forgetStoredData($cookies);
        $window.location.href = '/';
    };
};

var TutorialController = function ($mdDialog, MainService) {
    var self = this;

    self.data = {
        appName: MainService.data.appName,
        currentIndex: 0,
        maxIndex: 2
    };
    self.previous = function () {
        if (self.data.currentIndex > 0) {
            self.data.currentIndex--;
        }
    };
    self.next = function () {
        if (self.data.currentIndex < self.data.maxIndex) {
            self.data.currentIndex++;
        }
        else {
            $mdDialog.cancel();
        }
    }
};

var module = angular.module('authedModule', ['ngCookies']);
module.controller('AuthedController', [
    '$window',
    '$cookies',
    '$mdDialog',
    '$http',
    'AuthedService',
    AuthedController
]);
module.controller('TutorialController', [
    '$mdDialog',
    'MainService',
    TutorialController
]);