<script>
    import {NavStore} from '../store/Store';
    import ServicesButton from "./ServicesButton.svelte";


    $: fix = $NavStore.fix;
    $: wide = $NavStore.wide;
    $: drop = $NavStore.drop;

</script>




<nav class:fixation={fix} class:wide={wide}>

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
            
            <p>About</p>
            <p>Vision</p>
            <p>Services</p>
            <p>Distinction</p>
            <p>Appoach</p>
            <p>Contact</p>
            
        </div>
    {/if}


    {#if wide}
        <ServicesButton />
    {/if}

</nav>


<style>

    nav{
        position:fixed;
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
        background:var(--blue);
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
            gap:15px;
        }

        nav.wide .bottom p{
            font-weight:500;
            font-size:1.4rem;
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
            gap:5px;
            padding:15px 16px;
            background:rgba(255,255,255,0.75);
            backdrop-filter: blur(5px);
            box-shadow: 0px 4px 9.5px 0px rgba(0,0,0,0.25);
        }


            .bottom>p{
                font-size:1.6rem;
            }







@media (min-width:401px){

    .logo{
        width:40px;
    }

    .menu{
        width:30px;
    }

}


            
@media (min-width:550px){

    .top{
        padding:13px 25px;
    }



}



















@media (min-width:701px){

    .top{
        padding:0px;
    }

    nav.wide{
        padding:13px 25px;
    }

}



</style>








