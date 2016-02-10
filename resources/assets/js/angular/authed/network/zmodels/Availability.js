/**
 * Created by Shane Jansen on 2/10/16.
 */

var AvailabilityFtn = function() {
    function Availability(data) {
        var self = this;
        self.code = data.code;
        self.codeType = data.codeType;
        self.decoded = data.decoded;
    }

    /* Getters */
    Availability.prototype.getCode = function() {
        var self = this;
        return self.code;
    };
    Availability.prototype.getCodeType = function() {
        var self = this;
        return self.codeType;
    };
    Availability.prototype.getDecoded = function() {
        var self = this;
        return self.decoded;
    };

    return Availability;
};

var module = angular.module('availabilityModule');
module.factory('Availability', [AvailabilityFtn]);
