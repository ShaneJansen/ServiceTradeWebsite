/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedServiceFtn = function () {
    var AuthedService = {};
    AuthedService.data = {
        user: {
            id: -1,
            firstName: '',
            lastName: '',
            email: '',
            token: '',
            verified: '',
            availability: ''
        },
        toolbarTitle: ''
    };

    // Getters and setters
    AuthedService.getData = function() {
        return AuthedService.data;
    };
    AuthedService.setUserId = function (id) {
        AuthedService.data.user.id = id;
    };
    AuthedService.setUserFirstName = function (firstName) {
        AuthedService.data.user.firstName = firstName;
    };
    AuthedService.setUserLastName = function (lastName) {
        AuthedService.data.user.lastName = lastName;
    };
    AuthedService.setUserEmail = function (email) {
        AuthedService.data.user.email = email;
    };
    AuthedService.setUserToken = function (token) {
        AuthedService.data.user.token = token;
    };
    AuthedService.setUserVerified = function (verified) {
        AuthedService.data.user.verified = verified;
    };
    AuthedService.setUserAvailability = function (availability) {
        AuthedService.data.user.availability = availability;
    };
    AuthedService.setToolbarTitle = function (toolbarTitle) {
        AuthedService.data.toolbarTitle = toolbarTitle;
    };

    // Functions
    AuthedService.loadUserData = function ($cookies) {
        var userCreds = JSON.parse($cookies.get('userCreds'));
        AuthedService.setUserId(userCreds.id);
        AuthedService.setUserFirstName(userCreds.firstName);
        AuthedService.setUserLastName(userCreds.lastName);
        AuthedService.setUserEmail(userCreds.email);
        AuthedService.setUserToken(userCreds.token);
        AuthedService.setUserVerified(userCreds.verified);
        AuthedService.setUserAvailability(userCreds.availability)
    };
    AuthedService.forgetStoredData = function ($cookies) {
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
    };

    return AuthedService;
};

var module = angular.module('authedModule');
module.factory('AuthedService', [AuthedServiceFtn]);
