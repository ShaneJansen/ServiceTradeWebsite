/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillFtn = function($http, MainService) {
    var SkillManager = {
        data: {
            userSkill: [],
            possibleSkills: []
        }
    };

    /* Getters */
    SkillManager.getData = function() {
        var self = this;
        return self.data;
    };

    /* Network requests */
    SkillManager.apiGetPossibleSkills = function (success, failure, reload) {
        var self = this;
        if (SkillManager.data.possibleSkills == [] || reload) {
            self.data.possibleSkills = [];
            $http({
                url: MainService.getData().apiUrl + 'skill/skills',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get possible skills success');
                // TODO
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get possible skills failure');
                if (failure != null) failure();
            });
        }
    };

    return SkillManager;
};

var module = angular.module('skillModule', []);
module.factory('SkillManager', [
    '$http',
    'MainService',
    SkillFtn
]);
