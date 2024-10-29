

<script>

    import {onMount, onDestroy} from 'svelte';
    import {ServicesState} from '../store/Other';

    let loaded = false;

    $: {
        
        if (loaded){
            let container = document.querySelector('.pictures');
            let element = document.querySelector(`.pic${$ServicesState.chosen[3]}`);


            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const scrollLeft = container.scrollLeft;
            const elementLeft = rect.left - containerRect.left + scrollLeft;

            container.scrollTo({
                left: elementLeft,
                behavior: 'smooth'
            });
        }


    }
    
    onMount(()=>{
        loaded = true;

        const scrollPosition = window.scrollY;
        document.querySelector('.pic1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        window.scrollTo(0, scrollPosition);
    });
    onDestroy(()=>{
        loaded = false;
    });
</script>


<div class="pictures">

    <img class="pic pic1" src="/Adamant/images/solar/solar.png" />
    <img class="pic pic2" src="/Adamant/images/hvac/hvac.png" />
    <img class="pic pic3" src="/Adamant/images/ventilation/ventilation.png" />
    <img class="pic pic4" src="/Adamant/images/steel/steel.png" />
    <img class="pic pic5" src="/Adamant/images/display/display.png" />
    <img class="pic pic6" src="/Adamant/images/furniture/furniture.png" />

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
            scroll-snap-align: center;
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