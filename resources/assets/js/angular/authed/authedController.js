/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($window, $cookies, $http, AuthedService, UserManager, DialogManager) {
    var self = this;
    self.initialize($window, $cookies, $http, AuthedService, UserManager, DialogManager);
    self.setClickHandlers($window, $cookies, UserManager);
};
AuthedController.prototype.initialize = function ($window, $cookies, $http, AuthedService, UserManager, DialogManager) {
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
    if (self.data.user.getFirstLogin() == 1) {
        DialogManager.showTutorialDialog();
    }
};
AuthedController.prototype.setClickHandlers = function ($window, $cookies, UserManager) {
    var self = this;
    self.logout = function () {
        UserManager.forgetStoredData();
        $window.location.href = '/';
    };
};

var module = angular.module('authedControllerModule', ['ngCookies', 'userModule', 'skillModule', 'dialogModule']);
module.controller('AuthedController', [
    '$window',
    '$cookies',
    '$http',
    'AuthedService',
    'UserManager',
    'DialogManager',
    AuthedController
]);
