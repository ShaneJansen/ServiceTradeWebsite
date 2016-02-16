/**
 * Created by Shane Jansen on 2/10/16.
 */

var SkillFtn = function() {
    function Skill(data) {
        var self = this;
        self.id = data.id;
        self.skillSubCategoryId = data.skillSubCategoryId;
        self.name = data.name;
    }

    Skill.prototype.getId = function() {
        var self = this;
        return self.id;
    };
    Skill.prototype.getSkillSubCategoryId = function() {
        var self = this;
        return self.skillSubCategoryId;
    };
    Skill.prototype.getName = function() {
        var self = this;
        return self.name;
    };

    return Skill;
};

var module = angular.module('skillModule');
module.factory('Skill', [
    SkillFtn
]);
