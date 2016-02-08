/**
 * Created by Shane Jansen on 2/3/16.
 */

var AddSkillsFtn = function (AuthedService, SkillsService) {
    var data = {

    };

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-skills.html',
        scope: {

        },
        link: function(scope, element, attr) {
            scope.data = data;
        }
    };
};

var module = angular.module('skillsModule');
module.directive('mySelectSkills', ['AuthedService', 'SkillsService', AddSkillsFtn]);
