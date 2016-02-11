/**
 * Created by Shane Jansen on 2/3/16.
 */

var AddSkillsFtn = function (SkillManager) {
    var data = {
        currentTabIndex: 0,
        selectedCategory: '',
        selectedSubCategory: '',
        selectedSkill: ''
    };

    function setBackButton(scope) {
        scope.canGoBack = data.currentTabIndex != 0;
    }

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-skills.html',
        scope: {

        },
        link: function(scope, element, attr) {
            scope.data = data;
            scope.canGoBack = false;
            SkillManager.apiGetPossibleSkills(null, null, false);
            //TODO: SkillManager.setSkillSelections('');

            data.skills = SkillManager.getData();

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
                data.selectedSkill = skill;
                // TODO: save the skill to the user's account
                data.currentTabIndex = 0;
                setBackButton(scope);
            };
        }
    };
};

var module = angular.module('skillsModule');
module.directive('mySelectSkills',[
    'SkillManager',
    AddSkillsFtn
]);
