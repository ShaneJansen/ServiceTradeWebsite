/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedServiceFtn = function () {
    var AuthedService = {};
    AuthedService.data = {
        user: {
            id: -1,
            firstName: "",
            lastName: "",
            email: "",
            token: ""
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

    return AuthedService;
};

var module = angular.module('authedModule');
module.factory('AuthedService', [AuthedServiceFtn]);
