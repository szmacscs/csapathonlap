@extends('_layouts.master')

@section('body')
    <video id="wrapper" autoplay loop ?wmode=transparent muted>
        <source src="assets/images/toborz_video2.mp4" type="video/mp4">
    </video>
    <div class="news-title">
        <h3>Hírek</h3>
    </div>
    <div class="news">
        <div style="height: 100px">

        </div>
        <div class="container justify-content-center" id="card-container">
            @foreach($news as $new)
                @include('_includes.news_card', ['new' => $new])
            @endforeach
        </div>
    </div>


@endsection
