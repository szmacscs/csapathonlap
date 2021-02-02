<div class="timeline-item">

    <div class="timeline-img"></div>

    <div class="timeline-content timeline-card js--fadeIn{{$album->flow}}">
        <div class="timeline-img-header" style="background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)),
                url('{{$album->img}}') center center no-repeat; background-size: cover;">
            <h2>{{$album->title}}</h2>
        </div>
        <div class="date"><b>{{$album->date}}</b></div>
        <p style="margin-bottom: 50px;" >{{$album->text}}</p>
        <a class="btn-details" style=" bottom:20px; position: relative" href={{$album->link}}>Album</a>
    </div>
</div>
