<script>

</script>


<nav>
    <div class="top">
        <div class="logo img"></div>
        <div class="menu img"></div>
        <div class="close img hide"></div>
    </div>

    <div class="bottom">
        
        <p>About</p>
        <p>Vision</p>
        <p>Services</p>
        <p>Distinction</p>
        <p>Appoach</p>
        <p>Contact</p>
        
    </div>

</nav>


<style>

    nav{
        position:fixed;
        width:100%;
        background:red;
        box-sizing: border-box;;
    }

        .top{
            background:orange;
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 16px;
        }

            .logo{
                width:35px;
                aspect-ratio: 1/1;
                background-image:url("/images/logo.svg");
            }

            .menu{
                width:25px;
                aspect-ratio: 1/1;
                background-image:url("/images/menu.svg");
            }

            .close{
                width:50px;
                aspect-ratio: 1/1;
                background-image:url("/images/close.svg");
            }

        .bottom{
            padding:15px 16px;
            background:rgba(255,255,255,0.75);

            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            gap:5px;
        }

            p{
                font-size:1.6rem;
            }

</style>








