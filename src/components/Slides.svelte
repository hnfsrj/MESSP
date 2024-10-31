

<script>

    import {onMount, onDestroy} from 'svelte';
    import {ServicesState} from '../store/Other';



    function slide_click_handler(e){

        // console.log($ServicesState.chosen);

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


    let observer;

    function observe_sliding(slides){

        observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const slide = Array.from(entry.target.classList)[1];

                // console.log(slide);

                ServicesState.update(() => {
                    return {"chosen":slide};
                });

            }
        });
        }, 
        {
            root: slides,
            threshold: 1
        });


        const cats = document.querySelectorAll('.cat');

        cats.forEach(cat=> observer.observe(cat));


    }


    let loaded = false;


    function scroller(el){
        let container = document.querySelector('.slides');
        let element = document.querySelector(el);

        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const scrollLeft = container.scrollLeft;
        const elementLeft = rect.left - containerRect.left + scrollLeft;

        container.scrollTo({
            left: elementLeft,
            behavior: 'smooth'
        });

    }


    $: {
        let el = `.${$ServicesState.chosen}`;

        if(loaded){

            scroller(el);


        }
    }




    onMount(()=>{
        loaded = true;

        const slides = document.querySelector('.slides');
        slides.addEventListener("click", (e)=>{
            slide_click_handler(e);
        })
        
        observe_sliding(slides);


    });

    onDestroy(()=>{
        slides.removeEventListener("click", (e)=>{
            slide_click_handler(e);
        })

        loaded = false;

        document.querySelectorAll('.cat').forEach(cat=> observer.unobserve(cat));
    });

</script>




<div class="slides">

    <div class="cat cat1">
        
        <div class="slide slide1">
            <p>1. Solar Energy Solutions</p>

            <p>We focus on delivering top-notch solar panels and pumps, specifically crafted for rural areas. Our solutions empower communities by providing sustainable energy, reducing reliance on traditional power sources, and promoting eco-friendly practices. Whether for agriculture, homes, or businesses, our solar products are designed to be reliable and efficient, even in the most remote locations.</p>
        
            <div class="products">
                <p>Products Offered</p>
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
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
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
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
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
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
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
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
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
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
                <img src="images/arrow.svg"/>
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
                <img class="reverse" src="images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>

</div>





<style>

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.slides{
        width:100%;
        height: 430px;
        position:relative;
        z-index:1;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -ms-flex-wrap:nowrap;
            flex-wrap:nowrap;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        overflow-x:scroll;
        overflow-y:hidden;
        -ms-scroll-snap-type:x mandatory;
            scroll-snap-type:x mandatory;
        scroll-behavior: smooth;
        margin-bottom:100px;
        gap:10px;
        padding:5px;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

        .cat{
            -ms-flex-negative: 0;
                flex-shrink: 0;
            width:100%;
            scroll-snap-align: center;
            -webkit-box-flex: 0;
                -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
            height:100%;
        }

            .slide{
                position:relative;
                width:100%;
                min-height:100%;
                -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                padding:20px 15px;
                background:rgba(255,255,255,0.7);
                border-radius:10px;
                -webkit-backdrop-filter: blur(6px);
                        backdrop-filter: blur(6px);
                -webkit-box-shadow: 0px 5px 3px 3px rgba(0,0,0,0.25);
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
                    display:-webkit-box;
                    display:-ms-flexbox;
                    display:flex;
                    -webkit-box-pack: end;
                        -ms-flex-pack: end;
                            justify-content: end;
                    -webkit-box-align:center;
                        -ms-flex-align:center;
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
                -webkit-transform:rotate(180deg);
                    -ms-transform:rotate(180deg);
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
        -webkit-transform:translate(0px, 30px);
            -ms-transform:translate(0px, 30px);
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