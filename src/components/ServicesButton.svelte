
<script>

    import { getContext, onDestroy, onMount } from "svelte";

    export let margined = false;

    let button;

    function handle_click(){

        document.querySelector('#services').scrollIntoView({ behavior: 'smooth'});
    }



    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    let elements = [];

    onMount(()=>{


        // if (margined){
    
            elements.push(document.querySelector('button'));
    
            observeElements(elements);
        // }

        button = document.querySelector('button');

        button.addEventListener('click',handle_click);
    });


    onDestroy(()=>{
        if(button){
            button.removeEventListener('click',handle_click);
        }

        if (margined){

            unobserveElements(elements);
        }

    });
</script>


<div class:margined = {margined} class:unmargined = {!margined}>

    <button class = "effect_blur animation_blur">Our Services</button>
    
</div>


<style>

    div{
        display:flex;
        justify-content: start;
    }

        div.margined{
            margin-top:20%;
        }

            div.margined .effect_blur{
                transform: translate(0px, 50px)
            }
            
            div.margined .animation_blur{
                transition: transform 1s;
            }

    button{
        background:var(--orange);
        color:white;
        font-size:2.2rem;
        width:190px;
        height:45px;
        outline:none;
        border:none;
        font-weight:700;
        border-radius: 15px;
        box-shadow: -3px 3px 4.4px 1.35px rgba(0,0,0,0.25);
    }

    button:hover{
        cursor:pointer;
    }

@media (min-width:401px){

    div.margined > button{
        height:50px;
    }

}


@media (min-width:550px){
    div.margined{
        margin-top:11%;
        
    }
    

}


@media (min-width:601px){

    button{
        width:210px;
    }

}

@media (min-width:801px){

    button{
        width:220px;
    }

}


</style>