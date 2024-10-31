
<script>

    import {getContext, onMount} from 'svelte';

    import {NavStore} from '../store/Store';
    import ServicesButton from './ServicesButton.svelte';
    import ThirdDimension from './ThirdDimension.svelte';




    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    

    onMount(()=>{
        let elements = [];

        elements.push(document.querySelector('section>p:first-of-type'));
        elements.push(document.querySelector('section>p:last-of-type'));

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>



<div class="blocker">
<section id="landing">
    <p class="effect_blur animate_blur">Adamant <br/>Engineering</p>

    <p class="effect_blur animate_blur">Committed to delivering premium<br/> engineering solutions</p>

    {#if !$NavStore.wide}
        <ServicesButton margined=true />
    {/if}

    <ThirdDimension />
</section>
</div>

<style>
    
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.effect_blur{
        -webkit-filter: blur(20px);
                filter: blur(20px);
        -webkit-transform: scale(2);
            -ms-transform: scale(2);
                transform: scale(2);
    }

    .animate_blur{
        -webkit-transition: -webkit-filter 1s, -webkit-transform 1.5s;
        transition: -webkit-filter 1s, -webkit-transform 1.5s;
        -o-transition: filter 1s, transform 1.5s;
        transition: filter 1s, transform 1.5s;
        transition: filter 1s, transform 1.5s, -webkit-filter 1s, -webkit-transform 1.5s;
    }



    #landing{
        min-height:100vh;
    }

    section>p:first-of-type{
        margin-top:20%;
        text-align:center;
        font-size:4rem;
        font-weight:700;
        color:var(--blue);
        
    }

    section>p:last-of-type{
        color:var(--blue);
        font-size:1.6rem;
        text-align:center;
        margin-top:10%;
        font-weight:500;
    }



@media (min-width:401px){

    section>p:first-of-type{
        font-size:5.5rem;
    }

    section>p:last-of-type{
        font-size:2rem;
        margin-top:13%;

    }


}


@media (min-width:550px){

    #landing p:first-of-type>br{
        display:none;
    }
    
    section>p:first-of-type{
        font-size:5rem;
        margin-top:15%;
    }
    
    section>p:last-of-type{
        margin-top:8%;
        font-size:2.2rem;
    }

}






@media (min-width:701px){

    section>p:first-of-type{
        font-size:5.5rem;
        margin-top:13%;
    }
    
    section>p:last-of-type{
        font-size:2.5rem;
    }


}





@media (min-width:801px){
    
    section>p:last-of-type{
        margin-top:7%;
    }

}



@media (min-width:901px){

    section>p:first-of-type{
        font-size:5.7rem;
    }

    section>p:last-of-type{
        margin-top:5%;
        font-size:2.7rem;

    }


}





@media (min-width:1001px){

    section>p:first-of-type{
        margin-top:8%;
        font-size:7rem;
    }

    section>p:last-of-type{
        margin-top:3.5%;
        font-size:3rem;

    }


}

@media (min-width:1051px){
	#landing{
		padding-left:15%;
		padding-right:15%;
	}
}



</style>