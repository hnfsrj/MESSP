
<script>


</script>



<div class="grids_container">

    <div class="grid">
        <div class="box"></div>
    </div>


    <div class="grid">
        <div class="box"></div>
        <div class="box"></div>
    </div>


    <div class="grid">
        <div class="box"></div>
        <div class="box"></div>
    </div>
    

</div>


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
            }

</style>