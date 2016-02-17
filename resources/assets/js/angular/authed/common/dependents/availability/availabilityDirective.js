/**
 * Created by Shane Jansen on 2/3/16.
 */

var SelectAvailabilityFtn = function (UserManager, AvailabilityManager) {
    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-availability.html',
        scope: {

        },
        link: function(scope, element, attr) {
            var data = {
                possibleAvailabilities: [],
                selectedAvailability: 0,
                availabilityBool: false,
                showProgress: false
            };

            // Initialize
            scope.data = data;
            data.selectedAvailability = UserManager.getData().user.getAvailability();
            AvailabilityManager.apiGetPossibleAvailabilities(null, null, false);
            data.possibleAvailabilities = AvailabilityManager.getData().possibleAvailabilities;
            data.availabilityBool = data.selectedAvailability != 0;

            // Click listeners
            scope.onAvailabilityChange = function(isSwitch) {
                if (isSwitch) {
                    // Switch activated
                    if (data.availabilityBool) UserManager.getData().user.setAvailability(1);
                    else UserManager.getData().user.setAvailability(0);
                    data.selectedAvailability = UserManager.getData().user.getAvailability();
                }
                else UserManager.getData().user.setAvailability(data.selectedAvailability);
                // Update user
                data.showProgress = true;
                UserManager.apiUpdateUser(function() {
                    data.showProgress = false;
                }, null);
            };
        }
    };
};

var module = angular.module('availabilityModule');
module.directive('mySelectAvailability', [
    'UserManager',
    'AvailabilityManager',
    SelectAvailabilityFtn
]);
