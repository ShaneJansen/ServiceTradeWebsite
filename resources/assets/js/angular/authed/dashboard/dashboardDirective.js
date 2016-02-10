/**
 * Created by Shane Jansen on 2/3/16.
 */

var SelectAvailabilityFtn = function (UserManager, AvailabilityManager) {
    var data = {
        user: '',
        possibleAvailabilities: [],
        availabilityBool: false,
        showProgress: false
    };

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-availability.html',
        scope: {

        },
        link: function(scope, element, attr) {
            scope.data = data;
            AvailabilityManager.apiGetPossibleAvailabilities(null, null, false);

            data.user = UserManager.getData().user;
            data.possibleAvailabilities = AvailabilityManager.getData().possibleAvailabilities;
            data.availabilityBool = data.user.getAvailability() != 0;

            scope.onAvailabilityChange = function(isSwitch) {
                if (isSwitch) {
                    // Switch activated
                    if (data.availabilityBool) data.user.setAvailability(1);
                    else data.user.setAvailability(0);
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

var module = angular.module('dashboardModule');
module.directive('mySelectAvailability', [
    'UserManager',
    'AvailabilityManager',
    SelectAvailabilityFtn
]);
