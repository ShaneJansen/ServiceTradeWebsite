/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($window, $cookies, $mdDialog, $http, AuthedService, UserManager) {
    var self = this;

    self.initialize($window, $cookies, $mdDialog, $http, AuthedService, UserManager);
    self.setClickHandlers($window, $cookies, UserManager);
};
AuthedController.prototype.initialize = function ($window, $cookies, $mdDialog, $http, AuthedService, UserManager) {
    var self = this;

    // Check if cookies are set
    if ($cookies.get('userCreds') == undefined) {
        $window.location.href = '/';
    }

    // Load and set user data
    UserManager.loadUserData();
    self.data = UserManager.getData();

    // Set the default http headers
    $http.defaults.headers.common['X-USER-ID'] = self.data.user.getId();
    $http.defaults.headers.common['X-AUTH-TOKEN'] = self.data.user.getToken();

    // Check for first login
    if (self.data.user.getFirstLogin() == 0) {
        AuthedService.showTutorialDialog($mdDialog);
    }
};
AuthedController.prototype.setClickHandlers = function ($window, $cookies, UserManager) {
    var self = this;

    self.logout = function () {
        UserManager.forgetStoredData();
        $window.location.href = '/';
    };
};

var TutorialController = function ($mdDialog, MainService) {
    var self = this;

    self.data = {
        appName: MainService.data.appName,
        currentIndex: 0,
        maxIndex: 2,
        selectedSkills: []
    };
    self.previous = function () {
        if (self.data.currentIndex > 0) {
            self.data.currentIndex--;
        }
    };
    self.next = function () {
        if (self.data.currentIndex < self.data.maxIndex) {
            if (self.data.currentIndex == 1) {
                // Skills were chosen
                //alert(JSON.stringify(self.data.selectedSkills));
                // TODO: loop skills; extract ids; update user skills API call
            }
            self.data.currentIndex++;
        }
        else {
            $mdDialog.cancel();
        }
    }
};

var module = angular.module('authedControllerModule', ['ngCookies', 'userModule']);
module.controller('AuthedController', [
    '$window',
    '$cookies',
    '$mdDialog',
    '$http',
    'AuthedService',
    'UserManager',
    AuthedController
]);
module.controller('TutorialController', [
    '$mdDialog',
    'MainService',
    TutorialController
]);