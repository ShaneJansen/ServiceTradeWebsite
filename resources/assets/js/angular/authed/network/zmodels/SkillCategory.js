/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillCategoryFtn = function(SkillSubCategory) {
    function SkillCategory(data) {
        var self = this;
        self.id = data.id;
        self.name = data.name;
        self.icon = data.icon;
    }
};

var module = angular.module('skillModule');
module.factory('SkillCategory', [
    'SkillSubCategory',
    SkillCategoryFtn
]);
