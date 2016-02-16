/**
 * Created by Shane Jansen on 2/16/16.
 */

var TutorialController = function ($mdDialog, MainService, SkillManager) {
    var self = this;
    self.data = {
        appName: MainService.data.appName,
        currentIndex: 0,
        maxIndex: 2,
        selectedSkillIds: []
    };

    self.previous = function () {
        if (self.data.currentIndex > 0) {
            self.data.currentIndex--;
        }
    };
    self.next = function () {
        if (self.data.currentIndex < self.data.maxIndex) {
            if (self.data.currentIndex == 1) {
                // Skills were chosen
                if (self.data.selectedSkillIds.length != 0) {
                    SkillManager.apiAddUserSkills(self.data.selectedSkillIds, null, null);
                }
            }
            self.data.currentIndex++;
        }
        else {
            $mdDialog.cancel();
        }
    }
};

var module = angular.module('dialogModule');
module.controller('TutorialController', [
    '$mdDialog',
    'MainService',
    'SkillManager',
    TutorialController
]);
