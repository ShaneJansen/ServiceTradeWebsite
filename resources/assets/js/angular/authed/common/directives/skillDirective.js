/**
 * Created by Shane Jansen on 2/3/16.
 */

var SkillSelectorFtn = function (SkillManager) {
    var data = {
        currentTabIndex: 0,
        selectedSkillNames: [],

        possibleSkillCategories: [],
        selectedCategory: {},
        selectedSubCategory: {}
    };

    function setBackButton(scope) {
        data.canGoBack = data.currentTabIndex != 0;
    }

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-skills.html',
        scope: {
            selectedSkillIds: '='
        },
        link: function(scope, element, attr) {
            scope.data = data;
            data.canGoBack = false;
            SkillManager.apiGetPossibleSkills(null, null, false);
            data.possibleSkillCategories = SkillManager.getData().possibleSkillCategories;

            scope.backClicked = function() {
                data.currentTabIndex--;
                setBackButton(scope);
            };
            scope.categoryClicked = function(category) {
                data.selectedCategory = category;
                data.currentTabIndex++;
                setBackButton(scope);
            };
            scope.subCategoryClicked = function(subCategory) {
                data.selectedSubCategory = subCategory;
                data.currentTabIndex++;
                setBackButton(scope);
            };
            scope.skillClicked = function(skill) {
                if (scope.selectedSkillIds.indexOf(skill.getId()) == -1) {
                    // Skill has not been selected yet
                    scope.selectedSkillIds.push(skill.getId());
                    data.selectedSkillNames.push(skill.getName());
                    data.currentTabIndex = 0;
                }
                setBackButton(scope);
            };
        }
    };
};

var UserSkillsFtn = function (SkillManager) {
    var data = {
        userSkills: []
    };

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/user-skills.html',
        scope: {
            //
        },
        link: function(scope, element, attr) {
            scope.data = data;
            SkillManager.apiGetUserSkills(null, null, false);
            data.userSkills = SkillManager.getData().userSkills;
        }
    };
};

var module = angular.module('skillModule');
module.directive('mySelectSkills',[
    'SkillManager',
    SkillSelectorFtn
]);
module.directive('myUserSkills', [
    'SkillManager',
    UserSkillsFtn
]);
