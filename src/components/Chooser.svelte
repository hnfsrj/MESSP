

<script>

    import {getContext, onMount, onDestroy} from 'svelte';
    import {ServicesState} from '../store/Other';

    let chosenElement;
    let loaded = false;

    function chooseElement() {

        if(loaded){

            document.querySelector('.chosen').classList.remove('chosen');
            document.querySelectorAll('.choice')[chosenElement].classList.add('chosen');

        }

    }


    $: {
        chosenElement = Number($ServicesState.chosen[3]) - 1;
        chooseElement();
    }


    

    function choose_handler(e,choices){

        const target = e.target;

        choices.forEach((choice, index)=>{

            if(choice == target || target == choice.lastElementChild){

                ServicesState.update(current_state => {
                    return {...current_state, "chosen":"cat"+(index+1)};
                });
            }
        });

    }



    const parent_observer = getContext('parent_observer');




    onMount(()=>{

        loaded = true;

        const chooser = document.querySelector('.chooser');
        const choices = document.querySelectorAll('.choice');


        parent_observer.observe(document.querySelector('.chooser'));

        chooser.addEventListener('click',(e)=>{
            choose_handler(e,choices);
        });

    

    });



    onDestroy(()=>{

        chooser.removeEventListener('click',(e)=>{
            choose_handler(e,choices);
        });
        
        loaded = false;

        parent_observer.unobserve(document.querySelector('.chooser'));

    });


</script>


<div class="chooser">

    <div class="effect_accordion animate_accordion animate_accordion1 choice chosen">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/solar.svg');"></div>
        <p>Solar Energy Solutions</p>
    </div>

    <div class="effect_accordion animate_accordion animate_accordion2 choice">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/hvac.svg');"></div>
        <p>HVAC System Integration and Technologies</p>
    </div>

    <div class="effect_accordion animate_accordion animate_accordion3 choice">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/ventilation.svg');"></div>
        <p>Industrial Ventilation Systems</p>
    </div>

    <div class="effect_accordion animate_accordion animate_accordion4 choice">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/steel.svg');"></div>
        <p>Stainless Steel Fabrication</p>
    </div>

    <div class="effect_accordion animate_accordion animate_accordion5 choice">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/display.svg');"></div>
        <p>Customized Display and Exhibition Solutions</p>
    </div>

    <div class="effect_accordion animate_accordion animate_accordion6 choice">
        <div class="choice_icon img" style="background-image:url('/Adamant/images/furniture.svg');"></div>
        <p>Furniture Manufacturing</p>
    </div>

</div>


<style>

    .effect_accordion{
        transform:translate(0px,100px);
    }

    .animate_accordion{
        transition: transform 0.5s;
    }

    .animate_accordion1{
        transition-delay: 0s;
    }


    .animate_accordion2{
        transition-delay: 0.2s;
    }

    .animate_accordion3{
        transition-delay: 0.4s;
    }

    .animate_accordion4{
        transition-delay: 0.6s;
    }

    .animate_accordion5{
        transition-delay: 0.8s;
    }

    .animate_accordion6{
        transition-delay: 1s;
    }



    .chooser{
        margin-bottom:50px;
    }

        .choice{
            display:flex;
            justify-content: start;
            align-items: center;
            gap:10px;
            margin-bottom:15px;
            padding:10px 0px;
            border-bottom:1px solid black;
        }

            .choice:hover{
                cursor:pointer;
            }

            
        .choice.chosen > p{
            color:var(--blue);
            font-weight: 700;
        }

            .choice_icon{
                background:var(--blue);
                flex-shrink: 0;
                flex-grow: 0;
                flex-basis: auto;
                width:30px;
                aspect-ratio: 1/1;
                border-radius:50%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 70%;
            }

            .choice>p{
                color:black;
                font-size:1.7rem;
                font-weight:500;
                text-align:start;
            }



@media (min-width:401px){

    .choice{
        gap:20px;
    }

    .choice_icon{
        width:40px;
    }

    .choice>p{
        font-size:2rem;
    }



    .choice_icon{

    }

    .choice>p{
        font-size:1.8rem;
    }



}




@media (min-width:901px){
    .chooser{
        width:95%;
        margin-bottom:0px;
    }
}

</style>