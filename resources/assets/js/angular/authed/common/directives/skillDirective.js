/**
 * Created by Shane Jansen on 2/3/16.
 */

var AddSkillsFtn = function (SkillManager) {
    var data = {
        currentTabIndex: 0,
        possibleSkillCategories: [],
        selectedCategory: {},
        selectedSubCategory: {}
    };

    function setBackButton(scope) {
        scope.canGoBack = data.currentTabIndex != 0;
    }

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-skills.html',
        scope: {
            selectedSkills: '='
        },
        link: function(scope, element, attr) {
            scope.data = data;
            scope.canGoBack = false;
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
                if (scope.selectedSkills.indexOf(skill) == -1) {
                    // Skill has not been selected yet
                    scope.selectedSkills.push(skill);
                    data.currentTabIndex = 0;
                }
                setBackButton(scope);
            };
        }
    };
};

var module = angular.module('skillModule');
module.directive('mySelectSkills',[
    'SkillManager',
    AddSkillsFtn
]);
