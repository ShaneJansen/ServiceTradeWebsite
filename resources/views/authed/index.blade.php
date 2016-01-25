@extends('layouts.authed.main')

@section('base.head')
    <link rel="stylesheet" href="/dist/css/authed/authed.css">
@stop

@section('main.body')
    <div ng-view></div>
@stop
