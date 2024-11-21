
<script>


</script>



<div class="grids_container">

    <div class="grid">
        <div style="background-image:url('./images/industrial/industrial2.jpg');" class="box"></div>
    </div>


    <div class="grid">
        <div style="background-image:url('./images/power/power2.jpg');" class="box"></div>
        <div style="background-image:url('./images/pump/pump2.jpg');" class="box"></div>
    </div>


    <div class="grid">
        <div style="background-image:url('./images/pump/pump4.jpg');" class="box"></div>
        <div style="background-image:url('./images/refrigeration/refrigeration1.jpg');" class="box"></div>
    </div>
    

</div>
<div style="clear: both;"></div>


<style>

    .grids_container{
        display:flex;
        flex-wrap:nowrap;
        justify-content: center;
        align-items: end;
        gap:10px;
        width:100%;
        margin-top:45%;
    }

        .grid{
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            gap:10px;
            flex:1;

        }

            .grid:first-of-type{
                margin-bottom:40px;
            }

            .grid:nth-of-type(2){
                margin-bottom:20px;
            }


            .box{
                width:100%;
                aspect-ratio: 1/1;
                background:silver;
                border:2px solid red;
                border-radius: 10px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }


@media (min-width:701px){

    .grids_container{
        margin-top:20%;
        gap:25px;
    }

        .grid{
            gap:25px;
        }

}


@media (min-width:851px){

    .grids_container{
        margin-top:0%;
        width:80%;
        float:right;
    }


}


@media (min-width:901px){

    .grids_container{
        width:70%;
        transform:translateY(-20%);
    }


}


</style>