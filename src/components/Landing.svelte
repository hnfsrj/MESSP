
<script>
    import {NavStore} from '../store/Store';
    import ServicesButton from './ServicesButton.svelte';
    import ThirdDimension from './ThirdDimension.svelte';

</script>


<section id="landing">
    <p>Adamant <br/>Engineering</p>

    <p>Committed to delivering premium<br/> engineering solutions</p>

    {#if !$NavStore.wide}
        <ServicesButton margined=true />
    {/if}

    <ThirdDimension />
</section>


<style>

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


@media (min-width:1300px){

    section>p:first-of-type{
        margin-top:6%;
    }


}

</style>