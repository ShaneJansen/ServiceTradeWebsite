/**
 * Created by Shane Jansen on 1/25/16.
 */

var SkillsController = function ($scope, AuthedService, DialogManager) {
    var self = this;
    self.initialize($scope, AuthedService, DialogManager);
};
SkillsController.prototype.initialize = function ($scope, AuthedService, DialogManager) {
    var self = this;
    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Skills');
    });
    self.addSkillsClicked = function() {
        DialogManager.showAddSkillsDialog();
    };
};

var module = angular.module('skillsControllerModule', ['skillModule', 'dialogModule']);
module.controller('SkillsController', [
    '$scope',
    'AuthedService',
    'DialogManager',
    SkillsController
]);