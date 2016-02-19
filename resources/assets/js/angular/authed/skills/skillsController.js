/**
 * Created by Shane Jansen on 1/25/16.
 */

var SkillsController = function ($scope, $mdDialog, AuthedService, DialogManager, SkillManager) {
    var self = this;
    self.initialize($scope, $mdDialog, AuthedService, DialogManager, SkillManager);
};
SkillsController.prototype.initialize = function ($scope, $mdDialog, AuthedService, DialogManager, SkillManager) {
    var self = this;
    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Skills');
    });
    self.addSkillsClicked = function() {
        DialogManager.showAddSkillsDialog();
    };
    self.removeSkill = function (skillId) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to remove this skill?')
            .textContent('You will no longer receive job requests for this skill.')
            .ok('Yes')
            .cancel('Cancel');
        $mdDialog.show(confirm).then(function() {
            // Remove skill
            SkillManager.apiRemoveUserSkill(skillId, null, null);
        }, function() {
            // Canceled
        });
    };
};

var module = angular.module('skillsControllerModule', ['skillModule', 'dialogModule', 'skillModule']);
module.controller('SkillsController', [
    '$scope',
    '$mdDialog',
    'AuthedService',
    'DialogManager',
    'SkillManager',
    SkillsController
]);