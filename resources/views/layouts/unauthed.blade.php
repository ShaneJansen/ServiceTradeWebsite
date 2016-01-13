@extends('layouts.base')

@section('base.body')
    <md-toolbar>
        <div class="md-toolbar-tools" layout-align="center center">
            <h2><span>ServiceTrade</span></h2>
        </div>
    </md-toolbar>

    <md-content layout="column" flex md-scroll-y>
        <div layout="column"> @yield('unauthed.body')</div>
        <span layout="column" flex></span>
        <div layout="column"> @include('layouts.footer') </div>
    </md-content>
@stop
