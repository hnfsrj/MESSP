<script>

    import { getContext, onMount, onDestroy } from "svelte";

    import {NavStore} from '../store/Store';


    $: fix = $NavStore.fix;
    $: wide = $NavStore.wide;
    $: drop = $NavStore.drop;
    $: services = $NavStore.services;


    function nav_buttons(e){

        let target = e.target;


        if (target == document.querySelector('.menu')){
            NavStore.update(current_state => {
                return {...current_state, "drop":true};
            });
            
        }else if (target == document.querySelector('.close')){
            NavStore.update(current_state => {
                return {...current_state, "drop":false, "services":false};
            });
        }else if (target == document.querySelector('.name')){
            document.querySelector('#landing').scrollIntoView({ behavior: 'smooth'});
        }else if (target == document.querySelector('.bottom_services')){
            NavStore.update(current_state => {
                return {...current_state, "services":true};
            });
        }else{
            
            NavStore.update(current_state => {
                return {...current_state, "drop":false, "services":false};
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


    function navigation_function(e){
        const target = e.target;

        if (target.matches('.bottom>p')){
            
            const to = target.innerText.toLowerCase();
            document.querySelector(`#${to}`).scrollIntoView({ behavior: 'smooth'});
        }

    }


    const nav_observer = getContext('nav_observer');


    onMount(()=>{

        nav_observer.observe(document.querySelector('nav'));
        

        const top = document.querySelector('nav');

        top.addEventListener('click',(e)=>{
            nav_buttons(e);
        });

        handle_scrolling();

        window.addEventListener("scroll", handle_scrolling);

        document.addEventListener("click",(e)=>{
            navigation_function(e);
        })

    });


    onDestroy(()=>{
        top.removeEventListener('click',(e)=>{
            nav_buttons(e);
        })
        
        window.removeEventListener("scroll", handle_scrolling);

        document.removeEventListener('click',(e)=>{
            navigation_function(e);
        })

        nav_observer.unobserve(document.querySelector('nav'));
    });

</script>




<nav class:fixation={fix} class:wide={wide} class:scrolled_wide={fix && wide} class="effect_down animate_down">

    <div class="top">

        <p class="name">MESSP</p>

        {#if !wide}
            {#if drop}
                <div class="close img"></div>
            {:else}
                <div class="menu img"></div>
            {/if}
        {/if}

    </div>

    {#if drop || wide}

        {#if wide || !services}
            <div class="bottom">
                
                <p>About</p>
                <p class="bottom_services">Services</p>
                <p>Vision</p>
                <p>Credibility</p>
                <p>Team</p>
                <p>Contact</p>
                
            </div>
        {/if}

        {#if services}

            <div class="dropdown">
                <p>Air-Condition Trading</p>
                <p>Pumps, Valves & Engines</p>
                <p>Lifts & Escalators</p>
                <p>Solar Systems & Components</p>
                <p>Power Equipment & Distribution</p>
                <p>Handling & Lifting Equipment</p>
                <p>Industrial Equipment & Spare Parts</p>
                <p>Refrigeration & Cold Storage</p>
            </div>

        {/if}

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
            background:var(--metal);
        }

            nav.fixation .name{
                color:white;
            }

        nav.fixation .top .menu{
            background-image:url("images/menu2.svg");
        }

        nav.fixation .top .close{
            background-image:url("images/close2.svg");
        }

    
        .top{
            display:flex;
            justify-content: space-between;
            align-items: end;
            padding:10px 16px;
            height:30px;
        }



            .name{
                color:var(--metal);
                font-size:2rem;
                font-weight:500;
            }

                .name:hover{
                    cursor:pointer;
                }



            .menu{
                width:25px;
                aspect-ratio: 1/1;
                background-image:url("images/menu1.svg");
            }

            .close{
                width:25px;
                aspect-ratio: 1/1;
                background-image:url("images/close1.svg");
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


            .bottom p{
                font-size:1.6rem;
                padding:10px;
                border-radius:10px;
                color:var(--metal);
            }

            .bottom p:hover{
                cursor:pointer;
                background:var(--red);
                color:white;
            }
        
        .dropdown{
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            gap:0px;
            padding:15px 16px;
            background:rgba(255,255,255,0.75);
            backdrop-filter: blur(5px);
            box-shadow: 0px 4px 9.5px 0px rgba(0,0,0,0.25);
        }

            .dropdown>p{
                font-size:1.6rem;
                padding:10px;
                border-radius:10px;
            }

            .dropdown>p:hover{
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








