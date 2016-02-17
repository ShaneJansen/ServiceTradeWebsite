/**
 * Created by Shane Jansen on 2/16/16.
 */

var AddSkillsController = function ($mdDialog, SkillManager) {
    var self = this;
    self.data = {
        selectedSkillIds: [],
        showProgress: false
    };
    self.initialize();
    self.addClickListeners($mdDialog, SkillManager);
};

AddSkillsController.prototype.initialize = function () {
    var self = this;
    self.dialogControl = {};
};

AddSkillsController.prototype.addClickListeners = function ($mdDialog, SkillManager) {
    var self = this;
    self.cancel = function () {
        self.resetDialog();
        $mdDialog.cancel();
    };
    self.addSkills = function () {
        if (self.data.selectedSkillIds.length != 0) {
            self.data.showProgress = true;
            SkillManager.apiAddUserSkills(self.data.selectedSkillIds, function() {
                self.resetDialog();
                $mdDialog.cancel();
            }, null);
        }
    };
};

AddSkillsController.prototype.resetDialog = function () {
    var self = this;
    self.dialogControl.resetData();
    self.data.selectedSkillIds.length = 0;
    self.data.showProgress = false;
};

var module = angular.module('dialogModule');
module.controller('AddSkillsController', [
    '$mdDialog',
    'SkillManager',
    AddSkillsController
]);
