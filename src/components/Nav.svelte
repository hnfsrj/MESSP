<script>

</script>


<nav class="fixation">
    <div class="top">
        <div class="logo img"></div>
        <p class="name">adamant<span>.</span></p>

        <div class="menu img"></div>
        <div class="close img hide"></div>
    </div>

    <div class="bottom hide">
        
        <p>About</p>
        <p>Vision</p>
        <p>Services</p>
        <p>Distinction</p>
        <p>Appoach</p>
        <p>Contact</p>
        
    </div>

</nav>


<style>


    nav.fixation{
        background:var(--blue);
        box-shadow: 0px 4px 7px 2px rgba(0,0,0,0.4);
    }

        nav.fixation .top .logo{
            display:none;
        }

        nav.fixation .top .name{
            display:block;
            color:white;
            font-size:2rem;
            font-weight:500;
        }
            nav.fixation .top .name>span{
                font-size:2rem;
                color:var(--green);
            }

        nav.fixation .top .menu{
            background-image:url("/images/menu2.svg");
        }

        nav.fixation .top .close{
            background-image:url("/images/close2.svg");
        }


    nav{
        position:fixed;
        width:100%;
        box-sizing: border-box;
        background:var(--translucent_lime);
        backdrop-filter: blur(5px);
        z-index:2;
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
                display:none;
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

        .bottom.hide{
            display:none;
        }

            .bottom>p{
                font-size:1.6rem;
            }

</style>








