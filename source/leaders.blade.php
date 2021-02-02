@extends('_layouts.master')

@section('body')
    <script> document.getElementById("header").style.display="block";</script>
    <div class="container-fluid">
        <div style="height: 100px;">

        </div>
        <div class="card-columns" style=" text-align: center">
            @foreach($leaders as $leader)
                @include('_includes.leaders_card', ['leader' => $leader])
            @endforeach
        </div>
    </div>


@endsection
