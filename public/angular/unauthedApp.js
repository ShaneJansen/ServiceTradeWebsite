var module = angular.module('unauthedApp', [
    'ngMaterial',

    'mainModule'
]);

module.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .accentPalette('deep-orange')
        .warnPalette('red')
        .backgroundPalette('grey')
});
