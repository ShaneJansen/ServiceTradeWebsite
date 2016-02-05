/**
 * Created by Shane Jansen on 1/13/16.
 */

var SkillsServiceFtn = function ($http, MainService) {
    var SkillsService = {};
    SkillsService.data = {
        userSkills: '',
        skills: '',
        skillSelections: ''
    };

    // Getters and setters
    SkillsService.getData = function() {
        return SkillsService.data;
    };

    // Network requests
    SkillsService.apiGetPossibleSkills = function (success, failure, reload) {
        if (SkillsService.data.skills == '' || reload) {
            $http({
                url: MainService.getData().apiUrl + 'skill/skills',
                method: 'GET'
            }).then(function successCallback(response) {
                console.log('NETWORK: get possible skills success');
                SkillsService.data.skills = response.data;
                if (success != null) success();
            }, function errorCallback(response) {
                console.log('NETWORK: get possible skills failure');
                if (failure != null) failure();
            });
        }
    };

    // Functions
    SkillsService.showSkillSelectorDialog = function ($mdDialog) {
        $mdDialog.show({
            controller: 'SkillSelectController',
            controllerAs: 'ctrl',
            templateUrl: 'templates/authed/dialogs/add-skills.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            closeTo: (document.querySelector('#selectSkills'))
        });
    };

    return SkillsService;
};

var module = angular.module('skillsModule');
module.factory('SkillsService', ['$http', 'MainService', SkillsServiceFtn]);
