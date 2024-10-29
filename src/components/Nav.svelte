<script>

    import { getContext, onMount, onDestroy } from "svelte";

    import {NavStore} from '../store/Store';
    import ServicesButton from "./ServicesButton.svelte";


    $: fix = $NavStore.fix;
    $: wide = $NavStore.wide;
    $: drop = $NavStore.drop;


    function nav_buttons(e){

        let target = e.target;


        if (target == document.querySelector('.menu')){
            NavStore.update(current_state => {
                return {...current_state, "drop":true};
            });
            
        }else if (target == document.querySelector('.close')){
            NavStore.update(current_state => {
                return {...current_state, "drop":false};
            });
        }else{
            NavStore.update(current_state => {
                return {...current_state, "drop":false};
            });
        }

    }


    function handle_scrolling(){
        let fix = window.scrollY > document.querySelector('#landing').clientHeight;
        
        if (fix){
            NavStore.update(current_state => {
                return {...current_state, "fix":true};
            });
        }else{
            NavStore.update(current_state => {
                return {...current_state, "fix":false};
            });
        }
    
    }


    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');

    let elements = [];

    onMount(()=>{


        elements.push(document.querySelector('nav'));

        observeElements(elements);
        

        const top = document.querySelector('nav');

        top.addEventListener('click',(e)=>{
            nav_buttons(e);
        });

        handle_scrolling();

        window.addEventListener("scroll", handle_scrolling);

    });


    onDestroy(()=>{
        top.removeEventListener('click',(e)=>{
            nav_buttons(e);
        })
        
        window.removeEventListener("scroll", handle_scrolling);
        
        unobserveElements(elements);
    });

</script>




<nav class:fixation={fix} class:wide={wide} class:scrolled_wide={fix && wide} class="effect_down animate_down">

    <div class="top">

        {#if fix}
            <p class="name">adamant<span>.</span></p>
        {:else}
            <div class="logo img"></div>
        {/if}

        {#if !wide}
            {#if drop}
                <div class="close img"></div>
            {:else}
                <div class="menu img"></div>
            {/if}
        {/if}

    </div>

    {#if drop || wide}
        <div class="bottom">
            
            <a href="#about"><p>About</p></a>
            <a href="#vision"><p>Vision</p></a>
            <a href="#services"><p>Services</p></a>
            <a href="#distinction"><p>Distinction</p></a>
            <a href="#approach"><p>Approach</p></a>
            <a href="#contact"><p>Contact</p></a>
            
        </div>
    {/if}


    {#if wide}
        <ServicesButton />
    {/if}

</nav>


<style>

    .effect_down{
        transform: translate(0px, -50px);
    }

    .animate_down{
        transition: transform 1.5s;
    }

    nav{
        position:fixed;
        top:0px;
        left:0px;
        width:100%;
        box-sizing: border-box;
        background:var(--translucent_lime);
        backdrop-filter: blur(5px);
        z-index:2;
    }

    
    nav.wide{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }  

        nav.wide .bottom{
            display:flex;
            flex-direction: row;
            flex-wrap:nowrap;
            justify-content: space-between;
            align-items: center;
            background: none;
            box-shadow: none;
            backdrop-filter:blur(0px);
            padding:0px;
            gap:0px;
        }

        nav.wide .bottom p{
            font-weight:500;
            font-size:1.4rem;
            color:var(--blue);
        }

            nav.wide .bottom p:hover{
                color:white;
            }
            
            nav.wide.fixation .bottom p:hover{
                color:white;
                background:var(--green);
            }


            nav.scrolled_wide{
                background:var(--blue);
            }

                nav.scrolled_wide .bottom p{
                    color:white;
                }


    nav.fixation{
        box-shadow: 0px 4px 7px 2px rgba(0,0,0,0.4);
    }

        nav.fixation .top{
            background:var(--blue);
        }

        nav.fixation .top .menu{
            background-image:url("/images/menu2.svg");
        }

        nav.fixation .top .close{
            background-image:url("/images/close2.svg");
        }

    
        .top{
            display:flex;
            justify-content: space-between;
            align-items: end;
            padding:10px 16px;
        }


            .logo{
                width:30px;
                aspect-ratio: 1/1;
                background-image:url("/images/logo.svg");
            }


            .name{
                color:white;
                font-size:2rem;
                font-weight:500;
            }

            .name>span{
                font-size:2rem;
                color:var(--green);
            }


            .menu{
                width:25px;
                aspect-ratio: 1/1;
                background-image:url("/images/menu1.svg");
            }

            .close{
                width:25px;
                aspect-ratio: 1/1;
                background-image:url("/images/close1.svg");
            }

        .bottom{
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            gap:0px;
            padding:15px 16px;
            background:rgba(255,255,255,0.75);
            backdrop-filter: blur(5px);
            box-shadow: 0px 4px 9.5px 0px rgba(0,0,0,0.25);
        }

            .bottom a{
                text-decoration: none;
                color:black;
            }

            .bottom p{
                font-size:1.6rem;
                padding:10px;
                border-radius:10px;
            }

            .bottom p:hover{
                cursor:pointer;
                background:var(--blue);
                color:white;
            }







@media (min-width:401px){

    nav.fixation .top{
        padding-top:12px;
        padding-bottom:12px;
    }

    .name{
        font-size:2.3rem;
    }

    .logo{
        width:40px;
    }

    .menu{
        width:30px;
    }

}


            
@media (min-width:601px){

    .top{
        padding-left:5%;
        padding-right:5%;
    }



}








@media (min-width:771px){

    .top{
        padding:0px;
    }

    nav.wide{
        padding:15px 3.5%;
    }

    nav.wide>div.bottom{
        position:absolute;
        top:52%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    nav.wide>div.bottom p{
        font-size:1.6rem;
        font-weight:500;
    }


    nav.scrolled_wide{
        padding:5px 3.5%;
    }


}






@media (min-width:801px){
    nav.wide{

        padding:15px 5%;
    }

    nav.scrolled_wide{
        padding:5px 3.5%;
    }

}



</style>








