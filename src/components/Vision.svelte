

<script>
    import {getContext, onMount} from 'svelte';

    import {OtherStates} from '../store/Other';


    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');
    

    onMount(()=>{
        let elements = [];

        elements.push(document.querySelector('.eye_image'));
        elements.push(document.querySelector('.gear_image'));

        const first = document.querySelectorAll('.block>p:first-of-type')
        const last = document.querySelectorAll('.block>p:last-of-type')

        elements = [...elements, ...first, ...last];


        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>

<div class="blocker">
<section id="vision">

    <div class="vision_block_container">

        <div class="block">

            <div>
                <img class="effect_open animate_open eye_image" src="images/eye.svg"/>
                <p>Vision</p>
            </div>

            <p class="effect_up animate_up1">Becoming the Preferred Electro  <br/>mechanical Partner</p>

            <p class="effect_up animate_up2">Our vision is to establish ourselves as the go-to electromechanical solutions provider across the Middle East and East African regions. We aim to be recognized not only for our technical expertise but also for our unwavering commitment to delivering lasting solutions tailored to the unique needs of our clients. By prioritizing the quality of materials, the reliability of services, and the satisfaction of our clients, we aspire to set new benchmarks in the electromechanical industry.</p>
            
        </div>

        {#if $OtherStates.split}
            <div class="line"></div>
        {/if}


        <div class="block">

            <div>
                <img class="effect_rotate animate_rotate gear_image" src="images/gear.svg"/>
                <p>Mission</p>
            </div>

            <p class="effect_up animate_up1">Delivering Genuine Materials and  <br/>Professional Services with Excellence</p>

            <p class="effect_up animate_up2">Our mission is to supply authentic materials and advanced machinery while providing highly standardized and professional services that exceed customer expectations. We are committed to meeting our clients' needs with precision, reliability, and a focus on timeliness, ensuring their success in every project. By adhering to the highest standards of quality and service delivery, we strive to build trust and long-term partnerships that drive mutual growth and satisfaction.</p>
            
        </div>
    
    </div>
    
</section>
</div>

<style>

    img.effect_open{
        transform:scale(0.1);
    }

    img.animate_open{
        transition: transform 1.5s;
    }


    .effect_rotate{
        transform: rotate(270deg);
    }

    .animate_rotate{
        transition: transform 2s;
    }

    .effect_up{
        transform:translate(0px, 50px);
    }

    .animate_up1{
        transition: transform 1s;
    }
    
    .animate_up2{
        transition: transform 1s;
        transition-delay: 0.5s;
    }

    #vision{
        padding-top:30%;
        padding-bottom:30%;
    }

    .block:first-of-type{
        margin-bottom:100px;
    }

        .block>div{
            display:flex;
            justify-content: start;
            gap:10px;
        }

        .block:first-of-type > div{
            align-items: end;
        }
        
        .block:last-of-type > div{
            align-items: center;
        }

            .eye_image{
                width:18%;
            }
            
            .gear_image{
                width:13%;
            }

            .block>div>p{
                font-size:2.5rem;
                font-weight:700;
                color:var(--blue);
            }

            .block>p>br{
                display:none;
            }

            .block>p:first-of-type{
                font-size:1.8rem;
                font-weight:700;
                margin-top:35px;
                margin-bottom:15px;
            }

            .block>p:last-of-type{
                font-size:1.7rem;
                font-weight:400;
            }

    .line{
        width:5px;
        min-height:100%;
        background:var(--green);
        border-radius:10px;
    }



@media (min-width:401px){

    .eye_image{
        width:16%;
    }

    .gear_image{
        width:12%;
    }

    .block>div>p{
        font-size:3rem;
    }

    .block>p:first-of-type{
        font-size:2.2rem;

    }

    .block>p:last-of-type{
        font-size:1.8rem;

    }


}

@media (min-width:501px){

    .eye_image{
        width:12%;
    }
    
    .gear_image{
        width:9%;
    }

}



@media (min-width:601px){
    #vision{

        padding-top:20%;
        padding-bottom:20%;

    }

    .eye_image{
        width:11%;
        transform:translate(0px, -3px);
    }
    
    .gear_image{
        width:8%;
    }

}


@media (min-width:651px){

    .eye_image{
        width:10%;
    }

    .gear_image{
        width:7%;
    }

}


@media (min-width:701px){
    .eye_image{
        width:9%;
    }

    .gear_image{
        width:6.7%;
    }

}


@media (min-width:801px){
    .eye_image{
        width:8%;
    }

    .gear_image{
        width:6.2%;
    }

}




@media (min-width:995px){
    #vision{
        padding-left:10%;
        padding-right:10%;

    }

    .vision_block_container{
        display:flex;
        justify-content: space-between;
        height:fit-content;
    }

        #vision div.block{
            width:45%;
            margin:0px;
        }

        .block>p>br{
            display:block;
        }
    
    #vision div.block:first-of-type > div{
        transform:translate(0px,-5px);
    }
    

    .eye_image{
        width:14%;
    }

    .gear_image{
        width:11.1%;
    }

}

@media (min-width:1051px){

    .eye_image{
        width:14%;
    }

    .gear_image{
        width:10.5%;
    }

}

@media (min-width:1101px){
    #vision div.block:first-of-type > div{
        transform:translate(0px,-8px);
    }
}

@media (min-width:1101px){
    #vision div.block:first-of-type > div{
        transform:translate(0px,-12px);
    }
}

@media (min-width:1190px){
    
    .eye_image{
        transform:translate(0px, -2px);
    }

    .gear_image{
        width:9.5%;
    }
}


</style>