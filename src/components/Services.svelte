

<script>

    import Chooser from './Chooser.svelte';
    import Slides from './Slides.svelte';
    import Pictures from './Pictures.svelte';

</script>


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
            font-size:2rem;
            font-weight:700;
            margin-bottom:50px;
        }

    .bottom{}










@media (min-width:401px){

    #services{
        background:red;
        background:var(--lime);
        padding-right:5%;
        padding-left:5%;
    }


    .top>p{
        font-size:3rem;
    }


}



@media (min-width:501px){
    #services{
        background:blue;
        background:var(--lime);

        padding-right:10%;
        padding-left:10%;
    }



}


@media (min-width:601px){
    #services{
        background:green;
        background:var(--lime);

        padding-right:15%;
        padding-left:15%;
    }

}


@media (min-width:701px){
    #services{
        background:purple;

        padding-right:18%;
        padding-left:18%;
    }

}


@media (min-width:801px){
    #services{
        background:yellow;
    }

}


@media (min-width:901px){
    #services{
        background:orange;
        background:var(--lime);
        padding:100px 16px;
    }

    .services_container{
        flex-direction: row;
        justify-content: space-between;
    }

    .top{
        text-align:start;
        width:40%;
        /* background:green; */
    }

    .bottom{
        /* background:purple; */
        width:60%;
        display:flex;
        justify-content: end;
        align-items: center;
    }

}


@media (min-width:1001px){
    #services{
        background:pink;
    }

}


@media (min-width:1301px){
    #services{
        background:red;
    }

}



</style>