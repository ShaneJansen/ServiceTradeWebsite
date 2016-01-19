/**
 * Created by Shane Jansen on 1/18/16.
 */

var IndexController = function ($mdDialog) {
    var self = this;

    self.showLoginDialog = function ($event) {
        showLoginDialog($mdDialog);
    };
};


var LoginDialogController = function ($controller, $mdDialog) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.register = function () {
        $mdDialog.cancel();
        // TODO
        alert('Change to register');
    };
    self.login = function (result) {
        showLoginDialog($mdDialog);
        alert('Login with: ' + result);
    };
};


function showLoginDialog($mdDialog) {
    $mdDialog.show({
            controller: 'LoginDialogController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/dialogLogin.html',
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
    '$controller',
    '$mdDialog',
    LoginDialogController
]);
