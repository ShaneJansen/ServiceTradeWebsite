@extends('layouts.authed.main')

@section('base.head')
    <link rel="stylesheet" href="/dist/css/authed/index.css">
@stop

@section('main.body')
    @include('authed.index2')
@stop
