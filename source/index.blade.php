@extends('_layouts.master')

@section('body')
    <script src="{{ mix('js/header.js', 'assets/build') }}"></script>
    <script> document.getElementById("header").style.display="none";</script>
    <video id="wrapper" autoplay loop ?wmode=transparent muted>
        <source src="assets/images/toborz_video2.mp4" type="video/mp4">
    </video>
    <div class="news-title">
        <h3>Hírek</h3>
    </div>
    <section class="news">
        <div>
            <div id="news-spacer" style="height: 50px">

            </div>
            <div class="container justify-content-center" id="card-container">
                @foreach($news as $new)
                    @include('_includes.news_card', ['new' => $new])
                @endforeach
            </div>
        </div>
    </section>


@endsection
