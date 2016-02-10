/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedServiceFtn = function () {
    var AuthedService = {
        data: {
            toolbarTitle: ''
        }
    };

    /* Setters */
    AuthedService.setToolbarTitle = function(toolbarTitle) {
        var self = this;
        self.data.toolbarTitle = toolbarTitle;
    };

    /* Functions */
    AuthedService.showTutorialDialog = function ($mdDialog) {
        $mdDialog.show({
            controller: 'TutorialController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/authed/dialogs/tutorial.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false
        });
    };

    return AuthedService;
};

var module = angular.module('authedModule');
module.factory('AuthedService', ['$http', 'MainService', AuthedServiceFtn]);
