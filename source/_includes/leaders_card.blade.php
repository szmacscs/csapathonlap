<div class="gradient-box" style="display: inline-block;box-shadow: 0 10px 10px 0.1px rgba(5, 10, 15,0.5); ">
    <div class="card text-white text-center p-3" style="background: #1a1e21;" >
        <img src={{$leader->img}} class="card-img-top" alt="..." style="width:15em; height:15em;border-radius: 50%; margin: 0 auto;">
        <div class="card-body">
            <h5 class="card-title">{{$leader->name}}</h5>
            <h6 class="card-subtitle">{{$leader->rank}}</h6>
            <p class="card-text" style="text-align: justify;!important">{{$leader->description}}</p>
        </div>
    </div>
</div>