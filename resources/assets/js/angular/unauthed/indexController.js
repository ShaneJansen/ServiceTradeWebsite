/**
 * Created by Shane Jansen on 1/18/16.
 */

/* IndexController */
var IndexController = function ($mdDialog, IndexService) {
    var self = this;

    self.showLoginDialog = function () {
        IndexService.showLoginDialog($mdDialog);
    };
    self.showRegisterDialog = function () {
        IndexService.showRegisterDialog($mdDialog);
    };
};

/*
    LoginDialogController
 */
var LoginDialogController = function ($window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.initialize(IndexService);
    self.setClickHandlers($window, $cookies, $mdDialog, MainService, IndexService);
};
LoginDialogController.prototype.initialize = function (IndexService) {
    var self = this;

    self.data = IndexService.getData().login;
};
LoginDialogController.prototype.setClickHandlers = function ($window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.forgot = function () {
        IndexService.showForgotDialog($mdDialog);
    };
    self.login = function () {
        self.showProgress = true;
        IndexService.apiAuthUser(function () {
            var creds = IndexService.getData().login.creds;
            IndexService.setUserCreds($cookies, creds);
            $window.location.href = '/home';
        }, function () {
            self.showProgress = false;
            self.data.error = MainService.arrayToNl(self.data.error);
        });
    };
};

/* RegisterDialogController */
var RegisterDialogController = function ($window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.initialize(IndexService);
    self.setClickHandlers($window, $cookies, $mdDialog, MainService, IndexService);
};
RegisterDialogController.prototype.initialize = function (IndexService) {
    var self = this;

    self.data = IndexService.getData().register;
};
RegisterDialogController.prototype.setClickHandlers = function ($window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.register = function () {
        self.showProgress = true;
        IndexService.apiCreateUser(function () {
            var creds = IndexService.getData().register.creds;
            IndexService.setUserCreds($cookies, creds);
            $window.location.href = '/home';
        }, function () {
            self.showProgress = false;
            self.data.error = MainService.arrayToNl(self.data.error);
        });
    };
};

/* FormatDialogController */
var ForgotDialogController = function ($mdDialog) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.ok = function () {
        alert('Forgot with: ' + JSON.stringify(self.data.creds));
    }
};

/*
    Modules
 */
var module = angular.module('indexModule', ['ngCookies', 'ngMaterial', 'mainModule']);
module.controller('IndexController', [
    '$mdDialog',
    'IndexService',
    IndexController
]);
module.controller('LoginDialogController', [
    '$window',
    '$cookies',
    '$mdDialog',
    'MainService',
    'IndexService',
    LoginDialogController
]);
module.controller('RegisterDialogController', [
    '$window',
    '$cookies',
    '$mdDialog',
    'MainService',
    'IndexService',
    RegisterDialogController
]);
module.controller('ForgotDialogController', [
    '$mdDialog',
    ForgotDialogController
]);
