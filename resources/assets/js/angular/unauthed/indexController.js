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
var LoginDialogController = function ($scope, $mdDialog, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, IndexService);
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
        IndexService.apiAuthUser();
    };
};
LoginDialogController.prototype.setBroadcastHandlers = function ($scope, IndexService) {
    var self = this;

    $scope.$on('handlerAuthedUser', function() {
        // TODO
        alert("REDIRECT WITH: " + IndexService.getCreds());
    });
    $scope.$on('handlerFailedAuthUser', function() {
        self.error = IndexService.getError();
    });

    self.creds = IndexService.getCreds();
};

/* RegisterDialogController */
var RegisterDialogController = function ($scope, $mdDialog, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, IndexService);
    self.setClickHandlers($mdDialog, IndexService);
};
RegisterDialogController.prototype.setClickHandlers = function ($mdDialog, IndexService) {
    var self = this;

    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.register = function () {
        alert('Register with: ' + JSON.stringify(self.creds));
        IndexService.apiCreateUser();
    };
};
RegisterDialogController.prototype.setBroadcastHandlers = function ($scope, IndexService) {
    var self = this;

    $scope.$on('handlerCreatedUser', function() {
        // TODO
        alert("REDIRECT WITH: " + JSON.stringify(IndexService.getCreds()));
    });
    $scope.$on('handlerFailedCreateUser', function() {
        self.error = IndexService.getError();
    });

    self.creds = IndexService.getCreds();
};

/* FormatDialogController */
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

/*
    Modules
 */
var module = angular.module('indexModule', ['ngMaterial', 'mainModule']);
module.controller('IndexController', [
    '$mdDialog',
    IndexController
]);
module.controller('LoginDialogController', [
    '$scope',
    '$mdDialog',
    'IndexService',
    LoginDialogController
]);
module.controller('RegisterDialogController', [
    '$scope',
    '$mdDialog',
    'IndexService',
    RegisterDialogController
]);
module.controller('ForgotDialogController', [
    '$mdDialog',
    ForgotDialogController
]);
