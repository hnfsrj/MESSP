

<script>

</script>


<div class="blocker">
<section id="credibility">
    
    <p class="trust_heading">Trusted By</p>

    <div class="trusts_container">

        <div class="trusted">

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Coca Cola
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Maaza International
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    BGI Ethiopia
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Zebidar Brewery
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Dashen Brewery
                </p>

            </div>


            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Awash Winery
                </p>

            </div>
            
            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Ambo Mineral Water
                </p>

            </div>

        </div>


        <div class="trusted">

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Coca Cola
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Maaza International
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    BGI Ethiopia
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Zebidar Brewery
                </p>

            </div>

            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Dashen Brewery
                </p>

            </div>


            <div class="trust">

                <div class="trust_pic"></div>
                <p class="trust_p">
                    Awash Winery
                </p>

            </div>
            
            <div class="trust">

                <div class="trust_pic"></div>
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
        color:var(--blue);
        margin-bottom:40px;
    }

    .trusts_container{
        overflow:scroll;
        display:flex;
        flex-wrap:nowrap;
    }


    .trusted{
        display:flex;
        flex-wrap:nowrap;
        align-items:start;
        justify-content: start;
        width:fit-content;
        animation: 5s slide infinite linear;
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
                width:60px;
                aspect-ratio: 1/1;
                border-radius: 50%;
            }

            .trust_p{
                margin-top:10px;
                text-align:center;
                font-size:1.4rem;
                font-weight:500;
            }

</style>