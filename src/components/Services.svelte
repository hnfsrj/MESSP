

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

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

#services{
        position:relative;
    }

    .services_container{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
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
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        margin-bottom:10%;
    }

    .top{
        text-align:start;
        width:45%;
    }

    .bottom{
        width:55%;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: end;
        -webkit-box-align: center;
            -ms-flex-align: center;
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