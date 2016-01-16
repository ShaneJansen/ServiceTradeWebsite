var module = angular.module('unauthedApp', [
    'ngMaterial',

    'mainModule'
]);

module.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo') // #3F51B5
        .accentPalette('blue') // #2196F3
        .warnPalette('red')
        .backgroundPalette('grey')
});
