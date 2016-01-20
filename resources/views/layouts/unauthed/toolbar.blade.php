@extends('layouts.unauthed.main')

@section('main.body')
    <md-toolbar>
        <div class="md-toolbar-tools">
            <md-button aria-label="Go Back" ng-href="@yield('toolbar.backLink')">
                Go Back
            </md-button>
            <h2>
                <span>@yield('toolbar.title')</span>
            </h2>
            <span flex></span>
        </div>
    </md-toolbar>
    @yield('toolbar.body')
@stop