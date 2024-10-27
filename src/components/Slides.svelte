

<script>

    import {onMount, onDestroy} from 'svelte';
    import {ServicesState} from '../store/Other';



    function slide_click_handler(e){

        const products = document.querySelectorAll('.slide1>div');
        const backs = document.querySelectorAll('.slide2>div');

        const target = e.target;

        if (target.classList.contains('products') || target.parentElement.classList.contains('products')){

            products.forEach((product)=>{

                if (target == product || target == product.querySelector('p') || target == product.querySelector('img')){
                    const grand_parent = product.parentElement.parentElement;
                    const slide1 = grand_parent.querySelector('.slide1');
                    const slide2 = grand_parent.querySelector('.slide2');

                    slide1.classList.add('hide');
                    slide2.classList.remove('hide');


                }

            })

        }else if(target.classList.contains('back') || target.parentElement.classList.contains('back')){
            backs.forEach((back)=>{

                if (target == back || target ==  back.querySelector('p') || target == back.querySelector('img')){
                    const grand_parent = back.parentElement.parentElement;
                    const slide1 = grand_parent.querySelector('.slide1');
                    const slide2 = grand_parent.querySelector('.slide2');

                    slide2.classList.add('hide');
                    slide1.classList.remove('hide');


                }

            })
        }


    }






    let loaded = false;



    $: {
        let element = document.querySelector(`.${$ServicesState.chosen}`);

        if(loaded){

            let container = document.querySelector('.slides');


            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const scrollLeft = container.scrollLeft;
            const elementLeft = rect.left - containerRect.left + scrollLeft;

            container.scrollTo({
                left: elementLeft,
                behavior: 'smooth'
            });



        }
    }





    function getPosition(slides){
        const total_width = slides.scrollWidth;
        const individual_width = total_width/6;
        const scroll_position = slides.scrollLeft;

        const selected = Math.trunc(scroll_position/individual_width + 1);


        ServicesState.update(current_state => {
            return {...current_state, "chosen":"cat"+(selected)};
        });

    }


    onMount(()=>{
        loaded = true;

        const slides = document.querySelector('.slides');
        let scrollTimeout;

        const scrollPosition = window.scrollY;
        document.querySelector('.cat1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        window.scrollTo(0, scrollPosition);

        slides.addEventListener("click", (e)=>{
            slide_click_handler(e);
        })

        // slides.addEventListener("scroll",(e)=>{

        //     clearTimeout(scrollTimeout);

        //     scrollTimeout = setTimeout(()=>{
        //         getPosition(slides);
        //     },100);
        // })
    });

    onDestroy(()=>{
        slides.removeEventListener("click", (e)=>{
            slide_click_handler(e);
        })

        loaded = false;

        // slides.removeEventListener("scroll",(e)=>{

        //     clearTimeout(scrollTimeout);

        //     scrollTimeout = setTimeout(()=>{
        //         getPosition(slides);
        //     },100);
        // })
    
    });

</script>




<div class="slides">

    <div class="cat cat1">
        
        <div class="slide slide1">
            <p>1. Solar Energy Solutions</p>

            <p>We focus on delivering top-notch solar panels and pumps, specifically crafted for rural areas. Our solutions empower communities by providing sustainable energy, reducing reliance on traditional power sources, and promoting eco-friendly practices. Whether for agriculture, homes, or businesses, our solar products are designed to be reliable and efficient, even in the most remote locations.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Solar photovoltaic (PV) panels</li>
                <li>Solar inverters</li>
                <li>Battery storage systems</li>
                <li>Solar water heaters</li>
                <li>Solar-powered pumps</li>
                <li>Complete solar installation kits</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>



    <div class="cat cat2">
        
        <div class="slide slide1">
            <p>2. HVAC System Integration and Technologies</p>

            <p>We deliver HVAC systems that ensure clean, comfortable air in your spaces. From design to installation and maintenance, our services are tailored to meet your specific needs, promoting a healthier indoor environment.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Central air conditioning units</li>
                <li>Ductless mini-split systems</li>
                <li>Central air conditioning units</li>
                <li>Air handling units (AHUs)</li>
                <li>Heating systems (furnaces and heat pumps)</li>
                <li>Smart thermostats</li>
                <li>Air purifiers and filtration systems</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>




    <div class="cat cat3">
        
        <div class="slide slide1">
            <p>3. Industrial Ventilation Systems</p>

            <p>We design and install effective ventilation systems for industrial environments, ensuring clean air circulation, controlled temperatures, and safe working conditions for your employees.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Exhaust fans</li>
                <li>Fresh air intake systems</li>
                <li>Ductwork and hoods</li>
                <li>Dust collection systems</li>
                <li>Fume extraction systems</li>
                <li>Control systems for ventilation</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>



    <div class="cat cat4">
        
        <div class="slide slide1">
            <p>4. Stainless Steel Fabrication</p>

            <p>As an authorized supplier of stainless steel materials, we offer a diverse range of high-quality stainless steel products. We also create custom stainless steel components for various industrial and commercial applications, ensuring strength and precision. Our skilled in-house team can manage everything from structural parts to specialized items, tailored to your exact requirements.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Custom stainless steel fittings and fasteners</li>
                <li>Stainless steel handrails and guardrails</li>
                <li>Fabricated stainless steel frames and supports</li>
                <li>Stainless steel tanks and containers</li>
                <li>Structural components for construction</li>
                <li>Specialty stainless steel parts for machinery</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>




    <div class="cat cat5">
        
        <div class="slide slide1">
            <p>5. Customized Display and Exhibition Solutions</p>

            <p>Adamant Engineering designs promotional stands and exhibition displays using locally sourced materials. Our display solutions are ideal for trade shows, sales promotions, and events. Each display is crafted to grab attention and make a lasting impression on your audience, all while supporting local craftsmanship and keeping costs down.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Custom exhibition booths</li>
                <li>Portable display stands</li>
                <li>Retail shelving units</li>
                <li>Pop-up banners and signage</li>
                <li>Interactive kiosks</li>
                <li>Trade show displays</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>





    <div class="cat cat6">
        
        <div class="slide slide1">
            <p>6. Furniture Manufacturing</p>

            <p>What makes our furniture services unique is the high level of personalization we offer. We work with interior designers and businesses to create specific designs, including unique color schemes like complete sets of green furniture or other custom colors. Our furniture combines functionality with tailored aesthetics, ensuring a perfect fit for any design project.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="/Adamant/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2 hide">
            <p>Products Offered</p>

            <ul>
                <li>Custom office furniture (desks, chairs, conference tables)</li>
                <li>Residential furniture (sofas, beds, dining sets)</li>
                <li>Modular furniture systems</li>
                <li>Outdoor furniture</li>
                <li>Storage solutions (cabinets, shelving)</li>
                <li>Specialty furniture (for events or specific needs)</li>
            </ul>

            <div class="back">
                <img class="reverse" src="/Adamant/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>

</div>





<style>

    .slides{
        width:100%;
        height: 430px;
        position:relative;
        z-index:1;
        display:flex;
        flex-wrap:nowrap;
        align-items: center;
        overflow:hidden;
        scroll-snap-type:x mandatory;
        scroll-behavior: smooth;
        margin-bottom:100px;
        gap:10px;
        padding:5px;
    }

        .cat{
            flex-shrink: 0;
            width:100%;
            scroll-snap-align: center;
            flex: 0 0 auto;
            height:100%;
        }

            .slide{
                position:relative;
                width:100%;
                min-height:100%;
                box-sizing: border-box;
                padding:20px 15px;
                background:rgba(255,255,255,0.7);
                border-radius:10px;
                backdrop-filter: blur(6px);
                box-shadow: 0px 5px 3px 3px rgba(0,0,0,0.25);
            }

                .slide>p:first-of-type{
                    font-size:1.9rem;
                    font-weight:700;
                    margin-bottom:20px;
                }

                .slide>p:nth-of-type(2){
                    font-size:1.6rem;
                    font-weight:400;
                    margin-bottom:35px;
                }

                .slide>div{
                    position:absolute;
                    bottom:0px;
                    right:0px;
                    padding:20px 15px;
                    display:flex;
                    justify-content: end;
                    align-items:center;
                    gap:5px;

                }

                    .slide>div:hover{
                        cursor:pointer;
                    }

                .slide>div>p{
                    font-size:1.5rem;
                    font-weight:500;
                    color:var(--blue);
                }

                .slide>div>img{
                    width:15px;
                }
        


        .slides cat div.slide2{
            min-height:100%;
        }
        
            .slide2 > ul{
                margin-left:10px;
            }

            .slide2 > ul > li{
                font-size:1.6rem;
                font-weight:400;
                margin-bottom:10px;
            }


            .slide2>div>img{
                transform:rotate(180deg);
            }



@media (min-width:401px){
    
    .slide{
        padding:20px;
    }


    .slide>p:first-of-type{
        font-size:2.3rem;
    }


    .slide>p:nth-of-type(2), .slide2 > ul > li{
        font-size:1.6rem;
        font-weight:450;
    }

    .slide>div>p{
        font-size:1.8rem;
    }

    .slide>div>img{
        width:20px;
    }
}


@media (min-width:501px){

    .slides{
        height:400px;
    }


    .slide{
        padding:30px 40px;
    }


    .slide>p:nth-of-type(2){
        font-size:1.7rem;
        font-weight:400;
    }

    .slide2 > ul > li{
        font-size:1.7rem;
        font-weight:400;
    }

    .slide>div{
        padding:20px 30px;
    }
}


@media (min-width:601px){
    .slides{
        width:90%;
        margin:0 auto;
        margin-bottom:100px;
    }
}


@media (min-width:701px){

    .slides{
        width:80%;
    }

}



@media (min-width:901px){

    .slides{
        width:100%;
        height:420px;
        transform:translate(0px, 30px);
        margin:0px;
    }

    .slide{
        line-height:25px;
        margin-bottom:0px;
    }


}


@media (min-width:1001px){

    .slides{
        height:450px;
    }
}



</style>