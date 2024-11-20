

<script>

</script>


<div class="blocker">
<section id="credibility">
    
    <p class="trust_heading">Trusted By</p>

    <div class="trusts_container">

        <div class="trust">

            <div class="trust_pic"></div>
            <p class="trust_p">
                Coca Cola
            </p>

        </div>

        <div class="trust">

            <div class="trust_pic"></div>
            <p class="trust_p">
                Maaza
            </p>

        </div>


        <div class="trust">

            <div class="trust_pic"></div>
            <p class="trust_p">
                BGI Ethiopia
            </p>

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
        display:flex;
        flex-wrap:nowrap;
        align-items:center;
        justify-content: center;

    }

        .trust{
            display:flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;

        }

            .trust:not(.trust:last-of-type){
                margin-right:30px;
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