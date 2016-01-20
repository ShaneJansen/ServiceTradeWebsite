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
