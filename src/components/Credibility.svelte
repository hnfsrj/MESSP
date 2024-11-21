

<script>

    import {onMount} from "svelte";

    let scrollableDiv;

    function left(){
        scrollableDiv.scrollLeft = 0;
    }

    onMount(()=>{

        scrollableDiv = document.querySelector(".trusts_container");

        window.addEventListener("load", left);

        window.addEventListener("resize", left);

        return () => {
            window.removeEventListener("load", left)
            window.removeEventListener("resize", left)
        };
    });



</script>


<div class="blocker">
<section id="credibility">
    
    <p class="trust_heading">Trusted By</p>

    <div class="trusts_container">

        <div class="trusted">

            <div class="trust">

                <div style="background-image:url('./images/credibility/coca.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Coca Cola
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/maaza.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Maaza International
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/bgi.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    BGI Ethiopia
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/zebidar.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Zebidar Brewery
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/dashen.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Dashen Brewery
                </p>

            </div>


            <div class="trust">

                <div style="background-image:url('./images/credibility/awash.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Awash Winery
                </p>

            </div>
            
            <div class="trust">

                <div style="background-image:url('./images/credibility/ambo.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Ambo Mineral Water
                </p>

            </div>

        </div>
        
        
        <div class="trusted">

            <div class="trust">

                <div style="background-image:url('./images/credibility/coca.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Coca Cola
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/maaza.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Maaza International
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/bgi.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    BGI Ethiopia
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/zebidar.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Zebidar Brewery
                </p>

            </div>

            <div class="trust">

                <div style="background-image:url('./images/credibility/dashen.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Dashen Brewery
                </p>

            </div>


            <div class="trust">

                <div style="background-image:url('./images/credibility/awash.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Awash Winery
                </p>

            </div>
            
            <div class="trust">

                <div style="background-image:url('./images/credibility/ambo.webp');" class="trust_pic"></div>
                <p class="trust_p">
                    Ambo Mineral Water
                </p>

            </div>

        </div>


        



    </div>

</section>
</div>

<style>

    #credibility{
        min-height: 0px;
        padding-bottom:100px;
    }


    .trust_heading{
        text-align:center;
        font-size:3rem;
        font-weight:700;
        color:var(--red);
        margin-bottom:40px;
    }

    .trusts_container{
        overflow:hidden;
        justify-content: start;
        display:flex;
        flex-wrap:nowrap;
        box-sizing: border-box;
    }


    .trusted{
        display:flex;
        flex-wrap:nowrap;
        align-items:start;
        justify-content: start;
        width:fit-content;
        animation: 15s slide infinite linear;
    }

    @keyframes slide{
        from{
            transform:translateX(0);
        }

        to{
            transform:translateX(-100%);
        }
    }

        .trust{
            display:flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            height:100%;
            margin:0px 15px;
        }


            .trust_pic{
                background:silver;
                width:80px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }

            .trust_p{
                margin-top:10px;
                text-align:center;
                font-size:1.4rem;
                font-weight:500;
            }




</style>