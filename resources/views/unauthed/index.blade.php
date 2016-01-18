@extends('layouts.unauthed.main')

@section('base.head')
    <link rel="stylesheet" href="/dist/css/unauthed/index.css">
@stop

@section('main.body')
    @include('unauthed.index2')
@stop
