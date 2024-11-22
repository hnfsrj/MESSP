

<script>

    import { getContext, onMount } from "svelte";

    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    onMount(()=>{
        let elements = [...document.querySelectorAll('.service_content')];

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>

<div class="blocker">
<section id="services">

    <p>Services</p>

    <div class="service_container">
        
        <a href="/#/air">
            <div class="effect_shrink animate_shrink service_content">

                <div style="background-image:url('./images/air/air1.jpg');" class="service_pic img"></div>

                <p>Air-Condition Trading</p>

            </div>
        </a>

        <a href="/#/pump">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/pump/pump1.jpg');" class="service_pic img"></div>

            <p>Pumps, Valves & Engines</p>

        </div>
        </a>

        <a href="/#/lift">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/lift/lift1.webp');" class="service_pic img"></div>

            <p>Lifts & Escalators</p>
 
        </div>
        </a>

        <a href="/#/solar">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/solar/solar1.jpg');" class="service_pic img"></div>

            <p>Solar Systems & Components</p>

        </div>
        </a>
        
        <a href="/#/power">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/power/power1.jpg');" class="service_pic img"></div>

            <p>Power Equipment & Distribution</p>
                
        </div>
        </a>

        <a href="/#/handling">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/handling/handling1.jpg');" class="service_pic img"></div>

            <p>Handling & Lifting Equipment</p>
            
        </div>
        </a>

        <a href="/#/industrial">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/industrial/industrial1.jpg');" class="service_pic img"></div>

            <p>Industrial Equipment & Spare Parts</p>
            
        </div>
        </a>

        <a href="/#/refrigeration">
        <div class="effect_shrink animate_shrink service_content">

            <div style="background-image:url('./images/refrigeration/refrigeration1.jpg');" class="service_pic img"></div>

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


    #services{
        padding-top:60px;
        padding-bottom:60px;
    }

        #services > p{
            text-align:center;
            font-size:3rem;
            font-weight:700;
            color:var(--orange);
            margin-bottom:40px;
        }

        .service_container{
            width:100%;
            display:flex;
            flex-wrap:wrap;
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

        .service_content{
            box-sizing: border-box;
            width:100%;
        }

            .service_pic{
                width:100%;
                aspect-ratio: 16/9;
                background-color:silver;
                margin-bottom:10px;
                background-size: 100%;
            }


            .service_content > p{
                color:var(--sky);
                text-align:center;
                font-size:1.7rem;
                font-weight:600;
                margin-bottom:15px;
            }







@media (min-width:401px){

    #services{
        padding: 0px 16px;

    }

    #services > p{
        font-size:3.2rem;
        margin-bottom:70px;
    }

    .service_container{
        box-sizing: border-box;
        padding:0px 10px;
        gap:30px;
    }


    .service_content > p{
        font-size:2.3rem;
        margin-bottom:20px;
    }

}


@media (min-width:551px){

    a{
        width:80%;
    }


}


@media (min-width:601px){


    .service_container{
        flex-direction:row;
        flex-wrap:wrap;
    }


}


@media (min-width:701px){

    .service_content > p{
        font-size:2rem;
        margin-bottom:20px;
    }

    a{
        width:40%;
    }
    
}


@media (min-width:1001px){

    a{
        width:30%;
    }

}


</style>