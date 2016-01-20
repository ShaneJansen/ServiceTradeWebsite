@extends('layouts.unauthed.toolbar')

@section('toolbar.backLink') / @stop

@section('toolbar.title') About @stop

@section('toolbar.body')
    @include('unauthed.about2')
@stop
