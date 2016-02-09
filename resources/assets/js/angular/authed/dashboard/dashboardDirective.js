/**
 * Created by Shane Jansen on 2/3/16.
 */

var SelectAvailabilityFtn = function (AuthedService, DashboardService) {
    var data = {
        authed: {},
        dashboard: {}
    };

    return {
        restrict: 'E',
        templateUrl: '/templates/authed/directives/select-availability.html',
        scope: {

        },
        link: function(scope, element, attr) {
            scope.data = data;
            DashboardService.apiGetPossibleAvailabilities(null, null, false);

            scope.data.authed = AuthedService.getData();
            scope.data.dashboard = DashboardService.getData();
            scope.availabilityBool = scope.data.authed.user.availability != 0;

            scope.onAvailabilityChange = function(isSwitch) {
                if (isSwitch) {
                    // Switch activated
                    if (scope.availabilityBool) AuthedService.setUserAvailability(1);
                    else AuthedService.setUserAvailability(0);
                }
                // Update user
                scope.showProgress = true;
                AuthedService.apiUpdateUser(function() {
                    scope.showProgress = false;
                }, null);
            };
        }
    };
};

var module = angular.module('dashboardModule');
module.directive('mySelectAvailability', ['AuthedService', 'DashboardService', SelectAvailabilityFtn]);
