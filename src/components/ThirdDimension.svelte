

<script>
    export let marginTop = 0;
</script>


<div style="margin-top:{marginTop}%;" class="three_container">
    <div class="glow"></div>

    <canvas id="canvas"></canvas>
</div>



<style>

    .three_container{
        position:relative;
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

</style>