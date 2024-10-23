


<div class="three_container">
    <div class="glow"></div>

    <canvas id="canvas"></canvas>
</div>



<style>

    .three_container{
        position:relative;
        margin-top:20%;
    }


    .glow{
        width:200px;
        aspect-ratio: 1/1;
        background:var(--green);
        opacity: 80%;
        filter:blur(40px);
        margin:0 auto;
    }

    canvas{
        display:none;
        position:absolute;
        width:100px;
        aspect-ratio: 1/1;
        background:orange;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }


@media (min-width:401px){
    .three_container{
        margin-top:30%;
    }
}


@media (min-width:550px){
    .three_container{
        margin-top:20%;
    }
}



@media (min-width:901px){

    .three_container{
        margin-top:13%;
    }

}



</style>