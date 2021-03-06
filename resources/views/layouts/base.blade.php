<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="description" content="Improve your skills and get work done.">
        <meta name="theme-color" content="#3F51B5">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
        <title>ServiceTrade - Improve your skills and get work done.</title>
        @yield('base.headMeta')
        <!-- Stylesheets -->
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="/dist/css/base.css">
        @yield('base.head')
    </head>

    <body>
        @yield('base.body')
        <!-- JavaScript -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-cookies.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.min.js"></script>
        @yield('base.bodyJavaScript')
    </body>
</html>