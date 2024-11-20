

<script>

    import { getContext, onMount } from "svelte";

    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    onMount(()=>{
        let elements = [...document.querySelectorAll('.difference_content')];

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>

<div class="blocker">
<section id="distinction">

    <p>Services</p>

    <div class="difference_container">
        
        <a href="#">
            <div class="effect_shrink animate_shrink difference_content">

                <div class="difference_pic"></div>

                <p>Air-Condition Trading</p>

            </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Pumps, Valves & Engines</p>

        </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Lifts & Escalators</p>
 
        </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Solar Systems & Components</p>

        </div>
        </a>
        
        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Power Equipment & Distribution</p>
                
        </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Handling & Lifting Equipment</p>
            
        </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Industrial Equipment & Spare Parts</p>
            
        </div>
        </a>

        <a href="#">
        <div class="effect_shrink animate_shrink difference_content">

            <div class="difference_pic"></div>

            <p>Refrigeration & Cold Storage</p>
            
        </div>
        </a>

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

        a{
            width:100%;
            text-decoration: none;
            color:inherit;
        }

        .difference_content{
            box-sizing: border-box;
            width:100%;
        }

            .difference_pic{
                width:100%;
                aspect-ratio: 16/9;
                background:silver;
                margin-bottom:10px;
            }


            .difference_content > p{
                color:var(--green);
                text-align:center;
                font-size:1.7rem;
                font-weight:600;
                margin-bottom:15px;
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


    .difference_content > p{
        font-size:2.3rem;
        margin-bottom:20px;
    }

}




@media (min-width:601px){


    .difference_container{
        flex-direction:row;
        flex-wrap:wrap;
    }


}


@media (min-width:701px){

    .difference_content > p{
        font-size:2rem;
        margin-bottom:20px;
    }


    
}




</style>