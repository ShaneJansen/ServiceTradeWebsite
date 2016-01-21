/**
 * Created by Shane Jansen on 1/18/16.
 */

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


var LoginDialogController = function ($mdDialog) {
    var self = this;

    self.creds = {
        email: "",
        password: ""
    };

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.forgot = function () {
        showForgotDialog($mdDialog);
    };
    self.login = function () {
        alert('Login with: ' + JSON.stringify(self.creds));
    };
};


var RegisterDialogController = function ($mdDialog) {
    var self = this;

    self.creds = {
        email: "",
        password1: "",
        password2: ""

    };

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.register = function () {
        alert('Register with: ' + JSON.stringify(self.creds));
    };
};

var ForgotDialogController = function ($mdDialog) {
    var self = this;

    self.creds = {
        email: ""
    };

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.ok = function () {
        alert('Forgot with: ' + JSON.stringify(self.creds));
    }
};


function showLoginDialog($mdDialog) {
    $mdDialog.show({
        controller: 'LoginDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/dialogLogin.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        closeTo: (document.querySelector('#login'))
    });
}


function showRegisterDialog($mdDialog) {
    $mdDialog.show({
        controller: 'RegisterDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/dialogRegister.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        closeTo: (document.querySelector('#register'))
    });
}

function showForgotDialog($mdDialog) {
    $mdDialog.show({
        controller: 'ForgotDialogController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/dialogForgot.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
    });
}


var module = angular.module('indexModule', ['ngMaterial']);
module.controller('IndexController', [
    '$mdDialog',
    IndexController
]);
module.controller('LoginDialogController', [
    '$mdDialog',
    LoginDialogController
]);
module.controller('RegisterDialogController', [
    '$mdDialog',
    RegisterDialogController
]);
module.controller('ForgotDialogController', [
    '$mdDialog',
    ForgotDialogController
]);
