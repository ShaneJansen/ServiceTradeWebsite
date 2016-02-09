/**
 * Created by Shane Jansen on 1/13/16.
 */

var SkillsServiceFtn = function ($http, MainService) {
    var SkillsService = {};
    SkillsService.data = {
        userSkills: '',
        possibleSkills: '',
        skillSelections: '' // Selections from the mySelectSkills directive
    };

    // Getters and setters
    SkillsService.getData = function() {
        return SkillsService.data;
    };
    SkillsService.setSkillSelections = function(skillSelections) {
        SkillsService.data.skillSelections = skillSelections;
    };

    // Network requests
    SkillsService.apiGetPossibleSkills = function (success, failure, reload) {
        if (SkillsService.data.possibleSkills == '' || reload) {
            $http({
                url: MainService.getData().apiUrl + 'skill/skills',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get possible skills success');
                SkillsService.data.possibleSkills = response.data;
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get possible skills failure');
                if (failure != null) failure();
            });
        }
    };

    return SkillsService;
};

var module = angular.module('skillsModule');
module.factory('SkillsService', ['$http', 'MainService', SkillsServiceFtn]);
