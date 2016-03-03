/**
 * Created by Shane Jansen on 2/10/16.
 */

var UserFtn = function($cookies, $http, MainService, User) {
    var UserManager = {
        data: {
            user: {}
        }
    };

    /* Getters */
    UserManager.getData = function() {
        var self = this;
        return self.data;
    };

    /* Network requests */
    UserManager.apiUpdateUser = function(success, failure) {
        var self = this;
        console.log(self.data.user.availability);
        $http({
            url: MainService.getData().apiUrl + 'user',
            method: 'PUT',
            data: self.data.user
        }).then(function successCallback(response) {
            console.log('NETWORK: update user success');
            self.data.user = new User(response.data);
            self.updateUserData();
            if(success != null) success();
        }, function errorCallback(response) {
            console.log('NETWORK: update user failure');
            if(failure != null) failure();
        });
    };

    /* Functions */
    UserManager.loadUserData = function() {
        var self = this;
        var creds = JSON.parse($cookies.get('userCreds'));
        var data = {
            id: creds.id,
            firstName: creds.firstName,
            lastName: creds.lastName,
            email: creds.email,
            token: creds.token,
            verified: creds.verified,
            availability: creds.availability,
            firstLogin: creds.firstLogin
        };
        self.data.user = new User(data);
    };
    UserManager.updateUserData = function() {
        var self = this;
        $cookies.put('userCreds', JSON.stringify(self.data.user));
    };
    UserManager.forgetStoredData = function() {
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
    };

    return UserManager;
};

var module = angular.module('userModule', ['ngCookies']);
module.factory('UserManager', [
    '$cookies',
    '$http',
    'MainService',
    'User',
    UserFtn
]);
