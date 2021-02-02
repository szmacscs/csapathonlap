<div class="card bg-dark mt-5 js--fadeInLeft" id="card-news" style="width:70%; display: inline-block;border: none; box-shadow: 0 10px 10px 0.1px rgba(5, 10, 15,0.5);color: #e5e5e5">

    <img src={{$new->img}} class="card-img" style="position: relative;width:40%;border-bottom-left-radius: 0; border-top-left-radius: 0; float: right">
    <div class="card-body p-3" style="width: 50%; text-align: center; float:right">
        <h5 class="card-title">{{$new->title}}</h5>
        <p class="card-text">{{$new->author}}</p>
        <a href="#" class="btn-details" style="">Részletek</a>
    </div>

</div>