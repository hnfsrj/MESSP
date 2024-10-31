
<script>

    import { getContext, onDestroy, onMount } from "svelte";
    import { InstancedInterleavedBuffer } from "three";

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

    <button class = "effect_blur animation_blur">Services</button>
    
</div>


<style>

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

div{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }

        div.margined{
            margin-top:20%;
        }

            div.margined .effect_blur{
                -webkit-transform: translate(0px, 50px);
                    -ms-transform: translate(0px, 50px);
                        transform: translate(0px, 50px)
            }
            
            div.margined .animation_blur{
                -webkit-transition: -webkit-transform 1s;
                transition: -webkit-transform 1s;
                -o-transition: transform 1s;
                transition: transform 1s;
                transition: transform 1s, -webkit-transform 1s;
            }

    button{
        background:var(--green);
        color:white;
        font-size:2.2rem;
        width:190px;
        height:45px;
        outline:none;
        border:none;
        font-weight:700;
        border-radius: 15px;
        -webkit-box-shadow: -3px 3px 4.4px 1.35px rgba(0,0,0,0.25);
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



@media (min-width:771px){
    button{
        width:100px;
        height:35px;
        font-size:1.6rem;
    }



}







</style>