/**
 * Created by Shane Jansen on 2/10/16.
 */

var DialogFtn = function($mdDialog) {
    var DialogManager = {};

    /* Functions */
    DialogManager.showTutorialDialog = function () {
        $mdDialog.show({
            controller: 'TutorialController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/authed/dialogs/tutorial.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false
        });
    };
    DialogManager.showAddSkillsDialog = function () {
        $mdDialog.show({
            controller: 'AddSkillsController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/authed/dialogs/add-skills.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false
        });
    };

    return DialogManager;
};

var module = angular.module('dialogModule', []);
module.factory('DialogManager', [
    '$mdDialog',
    DialogFtn
]);
