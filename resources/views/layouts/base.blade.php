<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="description" content="Get work done and improve your skills.">
        <meta name="theme-color" content="#333333">
        <title>ServiceTrade - Get work done and impprove your skills.</title>
        @yield('base.headMeta')
        <!-- Stylesheets -->
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css">
        @yield('base.head')
    </head>

    <body ng-app="app" ng-cloak layout="column" layout-fill>
        @yield('base.body')
        <!-- JavaScript -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-cookies.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>
        <script src="/angular/app.js"></script>
        @yield('base.bodyJavaScript')
    </body>
</html>