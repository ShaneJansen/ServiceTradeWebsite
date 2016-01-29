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
var LoginDialogController = function ($scope, $window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, $window, $cookies, MainService, IndexService);
    self.setClickHandlers($mdDialog, IndexService);
};
LoginDialogController.prototype.setClickHandlers = function ($mdDialog, IndexService) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.forgot = function () {
        IndexService.showForgotDialog($mdDialog);
    };
    self.login = function () {
        self.showProgress = true;
        IndexService.apiAuthUser();
    };
};
LoginDialogController.prototype.setBroadcastHandlers = function ($scope, $window, $cookies, MainService, IndexService) {
    var self = this;

    $scope.$on('handlerAuthedUser', function() {
        var creds = IndexService.getData().login.creds;
        IndexService.setUserCreds($cookies, creds);
        $window.location.href = '/home';
    });
    $scope.$on('handlerFailedAuthUser', function() {
        self.showProgress = false;
        self.data.error = MainService.arrayToNl(self.data.error);
    });

    self.data = IndexService.getData().login;
};

/* RegisterDialogController */
var RegisterDialogController = function ($scope, $window, $cookies, $mdDialog, MainService, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, $window, $cookies, MainService, IndexService);
    self.setClickHandlers($mdDialog, IndexService);
};
RegisterDialogController.prototype.setClickHandlers = function ($mdDialog, IndexService) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.register = function () {
        self.showProgress = true;
        IndexService.apiCreateUser();
    };
};
RegisterDialogController.prototype.setBroadcastHandlers = function ($scope, $window, $cookies, MainService, IndexService) {
    var self = this;

    $scope.$on('handlerCreatedUser', function() {
        var creds = IndexService.getData().register.creds;
        IndexService.setUserCreds($cookies, creds);
        $window.location.href = '/home';
    });
    $scope.$on('handlerFailedCreateUser', function() {
        self.showProgress = false;
        self.data.error = MainService.arrayToNl(self.data.error);
    });

    self.data = IndexService.getData().register;
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
    '$scope',
    '$window',
    '$cookies',
    '$mdDialog',
    'MainService',
    'IndexService',
    LoginDialogController
]);
module.controller('RegisterDialogController', [
    '$scope',
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
