/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillSubCategoryFtn = function(Skill) {
    function SkillSubCategory(data) {
        var self = this;
        self.id = data.id;
        self.skillCategoryId = data.skillCategoryId;
        self.name = data.name;
        self.icon = data.icon;
        self.skills = [];
        var i;
        for (i=0; i<data.skills.length; i++)
            self.skills.push(
                new Skill(data.skills[i]));
    }

    SkillSubCategory.prototype.getId = function() {
        var self = this;
        return self.id;
    };
    SkillSubCategory.prototype.getSkillCategoryId = function() {
        var self = this;
        return self.skillCategoryId;
    };
    SkillSubCategory.prototype.getName = function() {
        var self = this;
        return self.name;
    };
    SkillSubCategory.prototype.getIcon = function() {
        var self = this;
        return self.icon;
    };
    SkillSubCategory.prototype.getSkills = function() {
        var self = this;
        return self.skills;
    };

    return SkillSubCategory;
};

var module = angular.module('skillModule');
module.factory('SkillSubCategory', [
    'Skill',
    SkillSubCategoryFtn
]);
