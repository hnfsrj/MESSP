

<script>

    import {onMount, onDestroy} from 'svelte';
    import {ServicesState} from '../store/Other';



    let loaded = false;


    function scroller(el){
        let container = document.querySelector('.pictures');
        let element = document.querySelector(el);

        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const scrollLeft = container.scrollLeft;
        const elementLeft = rect.left - containerRect.left + scrollLeft;

        // console.log("scrolling");
        container.scrollTo({
            left: elementLeft,
            behavior: 'smooth'
        });

    }


    $:{
        
        if (loaded){
            // console.log(`.pic${$ServicesState.chosen[3]}`);

            scroller(`.pic${$ServicesState.chosen[3]}`);
        }
    }

    onMount(()=>{

        loaded = true;




    })
    
    
    onDestroy(()=>{
        loaded = false;
    })


</script>


<div class="pictures">

    <img class="pic pic1" src="images/solar/solar.png" />
    <img class="pic pic2" src="images/hvac/hvac.png" />
    <img class="pic pic3" src="images/ventilation/ventilation.png" />
    <img class="pic pic4" src="images/steel/steel.png" />
    <img class="pic pic5" src="images/display/display.png" />
    <img class="pic pic6" src="images/furniture/furniture.png" />

</div>


<style>

    .pictures{
        width:90%;
        position:absolute;
        bottom:0px;
        right:0px;
        display:flex;
        flex-wrap:nowrap;
        align-items: center;
        overflow:hidden;
        scroll-snap-type:x mandatory;
        scroll-behavior: smooth;
        gap:10px;
    }

        .pic{
            width:100%;
            flex-shrink: 0;
            scroll-snap-align: none;
            flex: 0 0 auto;
        }




@media (min-width:401px){
    .pictures{
        width:80%;
    }


}

@media (min-width:501px){
    .pictures{
        width:60%;
    }
}

@media (min-width:601px){
    .pictures{
        width:50%;
    }
}

@media (min-width:851px){
    .pictures{
        width:45%;
    }
}

@media (min-width:1001px){
    .pictures{
        width:40%;
    }
}

@media (min-width:1101px){
    .pictures{
        width:35%;
    }
}
</style>