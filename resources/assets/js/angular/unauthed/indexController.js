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
var LoginDialogController = function ($scope, $window, $mdDialog, MainService, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, $window, MainService, IndexService);
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
LoginDialogController.prototype.setBroadcastHandlers = function ($scope, $window, MainService, IndexService) {
    var self = this;

    $scope.$on('handlerAuthedUser', function() {
        var params = buildUrlParams(IndexService.getLoginCreds());
        $window.location.href = '/home' + params;
    });
    $scope.$on('handlerFailedAuthUser', function() {
        self.showProgress = false;
        self.error = MainService.arrayToNl(IndexService.getLoginError());
    });

    self.creds = IndexService.getLoginCreds();
};

/* RegisterDialogController */
var RegisterDialogController = function ($scope, $window, $mdDialog, MainService, IndexService) {
    var self = this;

    self.setBroadcastHandlers($scope, $window, MainService, IndexService);
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
RegisterDialogController.prototype.setBroadcastHandlers = function ($scope, $window, MainService, IndexService) {
    var self = this;

    $scope.$on('handlerCreatedUser', function() {
        var params = buildUrlParams(IndexService.getRegisterCreds());
        $window.location.href = '/home' + params;
    });
    $scope.$on('handlerFailedCreateUser', function() {
        self.showProgress = false;
        self.error = MainService.arrayToNl(IndexService.getRegisterError());
    });

    self.creds = IndexService.getRegisterCreds();
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
function buildUrlParams(creds) {
    var builder = "";
    builder += ("?id=" + creds.id);
    builder += ("&firstName=" + creds.firstName);
    builder += ("&lastName=" + creds.lastName);
    builder += ("&email=" + creds.email);
    builder += ("&token=" + creds.token);
    builder += ("&verified=" + creds.verified);
    return builder;
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
    '$window',
    '$mdDialog',
    'MainService',
    'IndexService',
    LoginDialogController
]);
module.controller('RegisterDialogController', [
    '$scope',
    '$window',
    '$mdDialog',
    'MainService',
    'IndexService',
    RegisterDialogController
]);
module.controller('ForgotDialogController', [
    '$mdDialog',
    ForgotDialogController
]);
