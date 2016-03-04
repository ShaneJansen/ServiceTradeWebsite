/**
 * Created by Shane Jansen on 2/3/16.
 */

var SelectAvailabilityFtn = function (UserManager, AvailabilityManager) {
    var staticData = {
        availabilityBool: false
    };

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-availability.html',
        scope: {

        },
        link: function(scope, element, attr) {
            var data = {
                possibleAvailabilities: [],
                userManager: {},
                showProgress: false
            };

            // Initialize
            scope.data = data;
            scope.staticData = staticData;
            data.userManager = UserManager.getData();
            AvailabilityManager.apiGetPossibleAvailabilities(null, null, false);
            data.possibleAvailabilities = AvailabilityManager.getData().possibleAvailabilities;
            staticData.availabilityBool = data.userManager.user.getAvailability() != 0;

            // Click listeners
            scope.onAvailabilityChange = function(isSwitch) {
                if (isSwitch) {
                    // Switch activated
                    if (staticData.availabilityBool) data.userManager.user.setAvailability(1);
                    else data.userManager.user.setAvailability(0);
                }
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
