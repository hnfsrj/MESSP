

<script>

    import { getContext, onMount } from "svelte";

    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    onMount(()=>{
        let elements = [...document.querySelectorAll('.difference')];

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>

<div class="blocker">
<section id="distinction">

    <p>What Makes Us Different</p>

    <div class="difference_container">
        
        
        
        <div class="effect_shrink animate_shrink difference">
            <p>INNOVATION</p>
            
            <p>We push boundaries with advanced technology, delivering cutting-edge solutions tailored to local needs.</p>
        </div>
        
        <div class="effect_shrink animate_shrink difference">
            <p>RESEARCH</p>
            
            <p>We drive discovery through rigorous exploration and analysis, developing evidence-based solutions tailored to address complex local challenges.</p>
        </div>
        
        <div class="effect_shrink animate_shrink difference">
            <p>TECHNOLOGY</p>
            
            <p>We leverage the latest global advancements and bring them to East Africa, ensuring that our clients benefit from top-tier engineering and production capabilities.</p>
        </div>
        
        <div class="effect_shrink animate_shrink difference">
            <p>TRAINING AND GROWTH</p>

            <p>We focus on building local talent by sharing knowledge and providing hands-on training to strengthen our workforce.</p>
        </div>
        
        <div class="effect_shrink animate_shrink difference">
            <p>COMMUNITY ENGAGEMENT</p>
            
            <p>We create job opportunities and support local industries, giving back to the community.</p>
        </div>
        
        <div class="effect_shrink animate_shrink difference">
            <p>AFFORDABLE AND CLEAR ENERGY SOLUTIONS</p>
            
            <p>Our energy solutions are cost-effective and clear, making sustainability accessible to all.</p>
            
        </div>
    </div>
    
    
</section>
</div>

<style>

    .effect_shrink{
        transform: scale(0.1);
    }

    .animate_shrink{
        transition: transform 0.5s;
    }


    #distinction{
        padding-top:60px;
        padding-bottom:60px;
    }

        #distinction > p{
            text-align:center;
            font-size:3rem;
            font-weight:700;
            color:var(--blue);
            margin-bottom:40px;
        }

        .difference_container{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap:25px;
        }

            .difference{
                background:var(--blue);
                border-radius:15px;
                box-shadow: -3px 3px  3px 1px rgba(0,0,0,0.4);
                box-sizing: border-box;
                padding:20px 15px;
                height:200px;

            }

                .difference > p:first-child{
                    color:var(--green);
                    text-align:center;
                    font-size:1.7rem;
                    font-weight:600;
                    margin-bottom:15px;
                }

                .difference > p:last-child{
                    color:white;
                    text-align:start;
                    font-size:1.5rem;
                    font-weight:500;
                    line-height:22px;
                }






@media (min-width:401px){

    #distinction{
        padding: 130px 16px;

    }

    #distinction > p{
        font-size:3.2rem;
        margin-bottom:70px;
    }

    .difference_container{
        box-sizing: border-box;
        padding:0px 10px;
        gap:30px;
    }

    .difference{
        padding:40px 25px;
        height:225px;
    }

    .difference > p:first-child{
        font-size:2.3rem;
        margin-bottom:20px;
    }

    .difference > p:last-child{
        font-size:1.8rem;
        font-weight:400;
    }

}



@media (min-width:501px){

    
    .difference{
        width:80%;
    }
    
    
}


@media (min-width:601px){


    .difference_container{
        flex-direction:row;
        flex-wrap:wrap;
    }

    .difference{
        width:45%;
        height:310px;
    }


}


@media (min-width:701px){

    .difference{
        width:45%;
        height:250px;
    }

    .difference > p:first-child{
        font-size:2rem;
        margin-bottom:20px;
    }

    .difference > p:last-child{
        font-size:1.8rem;
        font-weight:350;
    }

    
}



@media (min-width:901px){

    .difference{
        width:30%;
        height:300px;
    }

}


@media (min-width:1001px){

    .difference{
        width:25%;
        height:280px;
    }

}




</style>