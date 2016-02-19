/**
 * Created by Shane Jansen on 1/13/16.
 */

var AuthedServiceFtn = function () {
    var AuthedService = {
        data: {
            toolbarTitle: ''
        }
    };

    /* Getters */
    AuthedService.getData = function() {
        var self = this;
        return self.data;
    };
    /* Setters */
    AuthedService.setToolbarTitle = function(toolbarTitle) {
        var self = this;
        self.data.toolbarTitle = toolbarTitle;
    };

    return AuthedService;
};

var module = angular.module('authedControllerModule');
module.factory('AuthedService', ['$http', 'MainService', AuthedServiceFtn]);
