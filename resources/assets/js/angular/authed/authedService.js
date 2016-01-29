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
            verified: ''
        }
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

    // Functions
    AuthedService.loadUserData = function ($cookies) {
        AuthedService.setUserId($cookies.get('userId'));
        AuthedService.setUserFirstName($cookies.get('userFirstName'));
        AuthedService.setUserLastName($cookies.get('userLastName'));
        AuthedService.setUserEmail($cookies.get('userEmail'));
        AuthedService.setUserToken($cookies.get('userToken'));
        AuthedService.setUserVerified($cookies.get('userVerified'));
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
