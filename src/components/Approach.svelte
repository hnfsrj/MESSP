

<script>

    import { getContext, onMount } from "svelte";

    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    onMount(()=>{
        let elements = [...document.querySelectorAll('.way')];

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>

<div class="blocker">
<section id="approach">

    <p>Adamant's Way</p>

    <div class="ways_container">
        <div class="effect_right animate_right way">

            <img src="/Adamant/images/knowledge.svg" />

            <div class="way_text">
                <p>Knowledge Transfer</p>

                <p>We believe in sharing knowledge and building skills. Adamant Engineering brings expertise from abroad to Ethiopia, driving innovation and helping our local workforce grow stronger.</p>
            </div>

        </div>

        <div class="effect_right animate_right way">

            <img src="/Adamant/images/client.svg" />

            <div class="way_text">
                <p>Client Collaboration</p>

                <p>We work closely with our clients, helping them set up branches and expand their reach. Together, we grow and succeed, creating lasting partnerships.</p>
            </div>

        </div>


        <div class="effect_right animate_right way">

            <img src="/Adamant/images/future.svg" />

            <div class="way_text">
                <p>Future Outlook</p>

                <p>Looking ahead, Adamant Engineering is committed to pushing innovation, increasing collaboration, and supporting Ethiopia’s journey toward sustainable development.</p>
            </div>

        </div>  
    </div>


</section>
</div>

<style>
    
    .effect_right{
        transform: translate(-100px, 0px);
    }

    .animate_right{
        transition: transform 0.5s;
    }
    
    #approach{}

        #approach > p{
            text-align:center;
            font-size:3rem;
            font-weight:700;
            color:var(--blue);
            margin-bottom:40px;
        }

        .ways_container{
            width:100%;
            margin:0 auto;
        }

            .way{
                text-align:center;
                margin-bottom:40px;
            }

                .way > img{
                    width:50px;
                }


                .way_text > p:first-of-type{
                    color:var(--blue);
                    font-size:1.9rem;
                    font-weight:700;
                    margin-top:10px;
                    margin-bottom:15px;
                }

                .way_text > p:last-of-type{
                    color:black;
                    font-size:1.4rem;
                    font-weight:550;
                }




@media (min-width:401px){

    #approach{
        padding-top:60px;
        padding-bottom:60px;
    }

    #approach > p{
        font-size:3.3rem;
        margin-bottom:70px;
    }

    .way{
        margin-bottom:70px;
    }

    .way > img{
        width:65px;
    }

    .way_text > p:first-of-type{
        font-size:2.2rem;
    }

    .way_text > p:last-of-type{
        font-size:1.6rem;
    }


}



@media (min-width:501px){


    .ways_container{
        width:80%;
        
    }

}



@media (min-width:601px){
    .ways_container{
        width:90%;
    }

    .way{
        display: flex;
        justify-content: space-between;
        align-items:start;
        gap:20px;
    }

    .way>img{
        width:50px;
    }

    .way_text{
        text-align:start;
    }

}




@media (min-width:901px){

    .ways_container{
        width:95%;
    }

}



@media (min-width:1051px){

    .ways_container{
        width:90%;
    }

}






</style>