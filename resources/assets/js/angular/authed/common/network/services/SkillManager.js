/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillFtn = function($http, MainService, SkillCategory, Skill) {
    var SkillManager = {
        data: {
            userSkills: [],
            possibleSkillCategories: []
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
        if (SkillManager.data.possibleSkillCategories.length == 0 || reload) {
            self.data.possibleSkillCategories = [];
            $http({
                url: MainService.getData().apiUrl + 'skill',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get possible skills success');
                var i;
                for (i=0; i<response.data.length; i++) {
                    self.data.possibleSkillCategories.push(
                        new SkillCategory(response.data[i]));
                }
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get possible skills failure');
                if (failure != null) failure();
            });
        }
    };
    SkillManager.apiGetUserSkills = function (success, failure, reload) {
        var self = this;
        if (SkillManager.data.userSkills.length == 0 || reload) {
            self.data.userSkills = [];
            $http({
                url: MainService.getData().apiUrl + 'user/skill',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get user skills success');
                var i;
                for (i=0; i<response.data.length; i++) {
                    self.data.userSkills.push(
                        new Skill(response.data[i]));
                }
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get user skills failure');
                if (failure != null) failure();
            });
        }
    };
    SkillManager.apiAddUserSkills = function (skillIds, success, failure) {
        var self = this;
        self.data.userSkills = [];
        $http({
            url: MainService.getData().apiUrl + 'user/skill',
            method: 'POST',
            data: {
                skillIds: skillIds
            }
        }).then(function successCallback(response) {
            console.log('NETWORK: add user skills success');
            var i;
            for (i=0; i<response.data.length; i++) {
                self.data.userSkills.push(
                    new Skill(response.data[i]));
            }
            if (success != null) success();
        }, function errorCallback(response) {
            console.log('NETWORK: add user skills failure');
            if (failure != null) failure();
        });
    };

    return SkillManager;
};

var module = angular.module('skillModule', []);
module.factory('SkillManager', [
    '$http',
    'MainService',
    'SkillCategory',
    'Skill',
    SkillFtn
]);
