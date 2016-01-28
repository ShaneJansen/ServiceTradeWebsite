/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedController = function($scope, $location, AuthedService) {
    var self = this;

    self.data = AuthedService.getData();
};

var module = angular.module('authedModule', []);
module.controller('AuthedController', [
    '$scope',
    '$location',
    'AuthedService',
    AuthedController
]);
