/**
 * Created by Shane Jansen on 2/10/16.
 */

var AvailabilityFtn = function($http, MainService, Availability) {
    var AvailabilityManager = {
        data: {
            possibleAvailabilities: []
        }
    };

    /* Getters */
    AvailabilityManager.getData = function() {
        var self = this;
        return self.data;
    };

    /* Network requests */
    AvailabilityManager.apiGetPossibleAvailabilities = function (success, failure, reload) {
        var self = this;
        if (self.data.possibleAvailabilities.length == 0 || reload) {
            self.data.possibleAvailabilities.length = 0;
            $http({
                url: MainService.getData().apiUrl + 'availabilities',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get possible availabilities success');
                var i;
                for (i=0; i<response.data.length; i++) {
                    self.data.possibleAvailabilities.push(
                        new Availability(response.data[i]));
                }
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get possible availabilities failure');
                if (failure != null) failure();
            });
        }
    };

    return AvailabilityManager;
};

var module = angular.module('availabilityModule', []);
module.factory('AvailabilityManager', [
    '$http',
    'MainService',
    'Availability',
    AvailabilityFtn
]);
