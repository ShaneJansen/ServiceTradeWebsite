/**
 * Created by Shane Jansen on 1/18/16.
 */

/* IndexController */
var IndexController = function ($mdDialog) {
    var self = this;

    self.showLoginDialog = function () {
        showLoginDialog($mdDialog);
    };
    self.showRegisterDialog = function () {
        showRegisterDialog($mdDialog);
    };
    self.showForgotDialog = function () {
        showForgotDialog($mdDialog);
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
        showForgotDialog($mdDialog);
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
        setUserCreds($cookies, creds);
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
        setUserCreds($cookies, creds);
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
    Functions
 */
function showLoginDialog($mdDialog) {
    $mdDialog.show({
        controller: 'LoginDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/unauthed/dialogLogin.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        closeTo: (document.querySelector('#login'))
    });
}
function showRegisterDialog($mdDialog) {
    $mdDialog.show({
        controller: 'RegisterDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/unauthed/dialogRegister.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        closeTo: (document.querySelector('#register'))
    });
}
function showForgotDialog($mdDialog) {
    $mdDialog.show({
        controller: 'ForgotDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/unauthed/dialogForgot.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
    });
}
function setUserCreds($cookies, creds) {
    $cookies.put('userId', creds.id);
    $cookies.put('userFirstName', creds.firstName);
    $cookies.put('userLastName', creds.lastName);
    $cookies.put('userEmail', creds.email);
    $cookies.put('userToken', creds.token);
    $cookies.put('userVerified', creds.verified);
}

/*
    Modules
 */
var module = angular.module('indexModule', ['ngCookies', 'ngMaterial', 'mainModule']);
module.controller('IndexController', [
    '$mdDialog',
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
