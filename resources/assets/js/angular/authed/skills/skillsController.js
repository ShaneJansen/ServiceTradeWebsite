/**
 * Created by Shane Jansen on 1/25/16.
 */

var SkillsController = function ($scope, AuthedService, SkillsService) {
    var self = this;

    self.initialize($scope, AuthedService);
    self.setClickHandlers(SkillsService);
};
SkillsController.prototype.initialize = function ($scope, AuthedService) {
    var self = this;

    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Skills');
    });
};
SkillsController.prototype.setClickHandlers = function (SkillsService) {
    // TODO
    // + Add click listener to AuthController to show skill select dialog
    // + Add elements to SkillsService to hold data from select dialog
    // + Controllers can access selected skills through SkillsService
};

var module = angular.module('skillsModule', ['skillModule']);
module.controller('SkillsController', [
    '$scope',
    'AuthedService',
    'SkillsService',
    SkillsController
]);