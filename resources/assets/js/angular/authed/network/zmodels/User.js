/**
 * Created by Shane Jansen on 2/10/16.
 */

var UserFtn = function() {
    function User(data) {
        var self = this;
        self.id = data.id;
        self.firstName = data.firstName;
        self.lastName = data.lastName;
        self.email = data.email;
        self.token = data.token;
        self.verified = data.verified;
        self.availability = data.availability;
        self.firstLogin = data.firstLogin;
    }

    /* Getters */
    User.prototype.getId = function() {
        var self = this;
        return self.id;
    };
    User.prototype.getFirstName = function() {
        var self = this;
        return self.firstName;
    };
    User.prototype.getLastName = function() {
        var self = this;
        return self.lastName;
    };
    User.prototype.getEmail = function() {
        var self = this;
        return self.email;
    };
    User.prototype.getToken = function() {
        var self = this;
        return self.token;
    };
    User.prototype.getVerified = function() {
        var self = this;
        return self.verified;
    };
    User.prototype.getAvailability = function() {
        var self = this;
        return self.availability;
    };
    User.prototype.getFirstLogin = function() {
        var self = this;
        return self.firstLogin;
    };

    /* Setters */
    User.prototype.setId = function(id) {
        var self = this;
        return self.id = id;
    };
    User.prototype.setFirstName = function(firstName) {
        var self = this;
        return self.firstName = firstName;
    };
    User.prototype.setLastName = function(lastName) {
        var self = this;
        return self.lastName = lastName;
    };
    User.prototype.setEmail = function(email) {
        var self = this;
        return self.email = email;
    };
    User.prototype.setToken = function(token) {
        var self = this;
        return self.token = token;
    };
    User.prototype.setVerified = function(verified) {
        var self = this;
        return self.verified = verified;
    };
    User.prototype.setAvailability = function(availability) {
        var self = this;
        return self.availability = availability;
    };
    User.prototype.setFirstLogin = function(firstLogin) {
        var self = this;
        return self.firstLogin = firstLogin;
    };

    return User;
};

var module = angular.module('userModule');
module.factory('User', [UserFtn]);
