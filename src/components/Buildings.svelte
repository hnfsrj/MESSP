
<script>


</script>


<div class="buildings">

    <img src="/images/building1.svg" class="building building1"/>
    <img src="/images/building2.svg" class="building building2"/>
    <img src="/images/building3.svg" class="building building3"/>
    <img src="/images/building4.svg" class="building building4"/>
    <img src="/images/building2.svg" class="building building5"/>
    <img src="/images/building3.svg" class="building building6"/>
    <img src="/images/building4.svg" class="building building7"/>
    <img src="/images/building5.svg" class="building building8"/>
    <img src="/images/building2.svg" class="building building9"/>
    <!-- <img src="/images/building5.svg" class="building building10 hide"/> -->
    <!-- <img src="/images/building5.svg" class="building building11 hide"/> -->

</div>


<style>

    .buildings{
        border-bottom:2px solid black;
        position:absolute;
        width:100%;
        bottom:0px;
        left:0px;
        box-sizing: border-box;
        padding-left:16px;
    }


        img.building1{
            width:19px;
        }

        img.building2{
            width:29px;
        }

        img.building3{
            width:32px;
        }

        img.building4{
            width:22px;
        }

        img.building5{
            width:22px;
        }

        img.building6{
            width:17px;
        }

        img.building7{
            width:12px;
        }

        img.building8{
            width:21px;
        }

        img.building9{
            width:33px;
        }

        /* img.building10{
            width:40px;
        }

        img.building11{
            width:21px;
        } */



@media (min-width:401px){

    .buildings{
        /* background:red; */
    }

    img.building{
        width:8%;
    }

}



@media (min-width:501px){

    .buildings{
        padding-left:6%;
        padding-right:6%;
    }

    img.building{
        width:6%;
    }
}



@media (min-width:701px){
    img.building{
        width:5%;
    }
}


@media (min-width:901px){


    img.building{
        width:4.5%;
    }

    /* img.building10{
        display:inline-block;
    }

    img.building11{
        display:inline-block;
    } */



}



@media (min-width:1001px){
    img.building{
        width:4%;
    }

}





@media (min-width:1301px){

    img.building{
        width:3.5%;
    }

}


</style>