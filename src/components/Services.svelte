

<script>

    import Chooser from './Chooser.svelte';
    import Slides from './Slides.svelte';
    import Pictures from './Pictures.svelte';

</script>

<div class="blocker">
<section id="services">

    <div class="services_container">

        <div class="top">
            <p>Supporting Clients in Six Essential Sectors</p>

            <Chooser />

        </div>


        <div class="bottom">
            <Slides />
        </div>

    </div>

    <Pictures />


</section>
</div>

<style>

    #services{
        position:relative;
    }

    .services_container{
        display:flex;
        flex-direction:column;
        justify-content: center;
        /* background:red; */
    }

        .top{
            text-align:center;
        }

        .top>p{
            color:var(--blue);
            font-size:2.2rem;
            font-weight:700;
            margin-bottom:50px;
        }

    .bottom{}










@media (min-width:401px){

    #services{
        padding-top:60px;
        padding-bottom:60px;
    }


    .top>p{
        font-size:3.2rem;
    }


}



@media (min-width:701px){

    #services{
        padding-right:10%;
        padding-left:10%;
    }

}


@media (min-width:801px){

    #services{
        padding-right:15%;
        padding-left:15%;
    }

}


@media (min-width:901px){

    #services{
        padding-right:5%;
        padding-left:5%;
    }


    .services_container{
        flex-direction: row;
        justify-content: space-between;
        margin-bottom:10%;
    }

    .top{
        text-align:start;
        width:45%;
    }

    .bottom{
        width:55%;
        display:flex;
        justify-content: end;
        align-items: center;
        margin:0px;
    }

}



@media (min-width:901px){
    .top{
        width:45%;
    }

    .bottom{
        width:50%;
    }

}


@media (min-width:1051px){

    #services{
        padding-right:10%;
        padding-left:10%;
    }


}



</style>