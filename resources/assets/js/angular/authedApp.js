/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedApp = function(AuthedApp) {
    var self = this;

    self.initialize(AuthedApp);
};

AuthedApp.prototype.initialize = function(AuthedApp) {
    AuthedApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo') // #3F51B5
            .accentPalette('blue') // #2196F3
            .warnPalette('red') // #F44336
            .backgroundPalette('grey')
    });
};

var module = angular.module('authedApp', [
    'ngRoute',
    'ngMaterial',
    'mainModule',
    'authedModule',
    'dashboardModule',
    'settingsModule',
    'skillsModule'
]);
module.controller('AuthedApp', [AuthedApp]);

module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/templates/authed/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        }).
        when('/skills', {
            templateUrl: '/templates/authed/skills.html',
            controller: 'SkillsController',
            controllerAs: 'skills'
        }).
        when('/settings', {
            templateUrl: '/templates/authed/settings.html',
            controller: 'SettingsController',
            controllerAs: 'skills'
        })
    }]);
