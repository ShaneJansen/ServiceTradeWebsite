/**
 * Created by Shane Jansen on 2/3/16.
 */

var SkillSelectorFtn = function (SkillManager) {
    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-skills.html',
        scope: {
            control: '=',
            selectedSkillIds: '='
        },
        link: function(scope, element, attr) {
            var data = {
                currentTabIndex: 0,
                selectedSkillNames: [],

                possibleSkillCategories: [],
                selectedCategory: {},
                selectedSubCategory: {}
            };

            // Initialize
            scope.data = data;
            scope.internalControl = scope.control || {};
            data.canGoBack = false;
            SkillManager.apiGetPossibleSkills(null, null, false);
            data.possibleSkillCategories = SkillManager.getData().possibleSkillCategories;

            // Used for calling directive methods from controller
            // Use & instead when making callbacks from directive to controller
            scope.internalControl.resetData = function() {
                data.selectedSkillNames.length = 0;
            };

            // Click Listeners
            scope.backClicked = function() {
                data.currentTabIndex--;
                setBackButton();
            };
            scope.categoryClicked = function(category) {
                data.selectedCategory = category;
                data.currentTabIndex++;
                setBackButton();
            };
            scope.subCategoryClicked = function(subCategory) {
                data.selectedSubCategory = subCategory;
                data.currentTabIndex++;
                setBackButton();
            };
            scope.skillClicked = function(skill) {
                if (scope.selectedSkillIds.indexOf(skill.getId()) == -1) {
                    // Skill has not been selected yet
                    scope.selectedSkillIds.push(skill.getId());
                    data.selectedSkillNames.push(skill.getName());
                    data.currentTabIndex = 0;
                }
                setBackButton();
            };

            // Functions
            function setBackButton() {
                data.canGoBack = data.currentTabIndex != 0;
            }
        }
    };
};

var UserSkillsFtn = function (SkillManager) {
    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/user-skills.html',
        scope: {
            itemText: '@',
            skillSelected: '&' // TODO
        },
        link: function(scope, element, attr) {
            var data = {
                userSkills: []
            };

            // Initialize
            scope.data = data;
            scope.itemText = scope.itemText || 'Select';
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
