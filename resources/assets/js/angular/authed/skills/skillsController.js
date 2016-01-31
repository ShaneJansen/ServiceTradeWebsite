/**
 * Created by Shane Jansen on 1/25/16.
 */

var SkillsController = function ($scope, AuthedService) {
    var self = this;

    self.initialize($scope, AuthedService);
};

SkillsController.prototype.initialize = function ($scope, AuthedService) {
    var self = this;

    $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
        AuthedService.setToolbarTitle('Skills');
    });
};

var module = angular.module('skillsModule', []);
module.controller('SkillsController', [
    '$scope',
    'AuthedService',
    SkillsController
]);
