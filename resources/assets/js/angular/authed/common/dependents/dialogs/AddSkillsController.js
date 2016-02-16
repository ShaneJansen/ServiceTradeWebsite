/**
 * Created by Shane Jansen on 2/16/16.
 */

var AddSkillsController = function ($mdDialog, SkillManager) {
    var self = this;
    self.data = {
        selectedSkillIds: [],
        showProgress: false
    };
    self.addClickListeners($mdDialog, SkillManager);
};

AddSkillsController.prototype.addClickListeners = function ($mdDialog, SkillManager) {
    var self = this;
    self.cancel = function () {
        $mdDialog.cancel();
    };
    self.addSkills = function () {
        if (self.data.selectedSkillIds.length != 0) {
            self.data.showProgress = true;
            SkillManager.apiAddUserSkills(self.data.selectedSkillIds, function() {
                self.data.showProgress = false;
                $mdDialog.cancel();
            }, null);
        }
    };
};

var module = angular.module('dialogModule');
module.controller('AddSkillsController', [
    '$mdDialog',
    'SkillManager',
    AddSkillsController
]);
