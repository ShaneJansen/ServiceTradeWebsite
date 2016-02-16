/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillCategoryFtn = function(SkillSubCategory) {
    function SkillCategory(data) {
        var self = this;
        self.id = data.id;
        self.name = data.name;
        self.icon = data.icon;
        self.skillSubCategories = [];
        var i;
        for (i=0; i<data.skillSubCategories.length; i++)
            self.skillSubCategories.push(
                new SkillSubCategory(data.skillSubCategories[i]));
    }

    SkillCategory.prototype.getId = function() {
        var self = this;
        return self.id;
    };
    SkillCategory.prototype.getName = function() {
        var self = this;
        return self.name;
    };
    SkillCategory.prototype.getIcon = function() {
        var self = this;
        return self.icon;
    };
    SkillCategory.prototype.getSkillSubCategories = function() {
        var self = this;
        return self.skillSubCategories;
    };

    return SkillCategory;
};

var module = angular.module('skillModule');
module.factory('SkillCategory', [
    'SkillSubCategory',
    SkillCategoryFtn
]);
