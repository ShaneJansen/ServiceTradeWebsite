@extends('layouts.unauthed.main')

@section('main.body')
    <md-toolbar>
        <div class="md-toolbar-tools">
            <md-button class="md-icon-button" ng-href="@yield('toolbar.backLink')">
                <i class="material-icons">arrow_back</i>
            </md-button>
            <h2>
                <span>@yield('toolbar.title')</span>
            </h2>
            <span flex></span>
        </div>
    </md-toolbar>
    @yield('toolbar.body')
@stop