@extends('_layouts.master')

@section('body')

    <script>


    </script>

    <section class="timeline">
        <div class="container">

            @foreach($albums as $album)
                @include('_includes.albums_card', ['ablum' => $album])
            @endforeach

        </div>
    </section>


@endsection
