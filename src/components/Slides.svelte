

<script>


</script>




<div class="slides">

    <div class="cat cat1">
        
        <div class="slide slide1">
            <p>1. Solar Energy Solutions</p>

            <p>We focus on delivering top-notch solar panels and pumps, specifically crafted for rural areas. Our solutions empower communities by providing sustainable energy, reducing reliance on traditional power sources, and promoting eco-friendly practices. Whether for agriculture, homes, or businesses, our solar products are designed to be reliable and efficient, even in the most remote locations.</p>
        
            <div>
                <p>Products Offered</p>
                <img src="/images/arrow.svg"/>
            </div>
        
        </div>



        <div class="slide slide2">
            <p>Products Offered</p>

            <ul>
                <li>Solar photovoltaic (PV) panels</li>
                <li>Solar inverters</li>
                <li>Battery storage systems</li>
                <li>Solar water heaters</li>
                <li>Solar-powered pumps</li>
                <li>Complete solar installation kits</li>
            </ul>

            <div>
                <img class="reverse" src="/images/arrow.svg"/>
                <p>Back</p>
            </div>
        
        </div>

    </div>

</div>





<style>

    .slides{
        width:100%;
        position:relative;
        z-index:1;
    }

        .cat{}

            .slide{
                width:100%;
                box-sizing: border-box;
                padding:20px 15px;
                background:rgba(255,255,255,0.7);
                border-radius:10px;
                backdrop-filter: blur(6px);
                box-shadow: 0px 5px 3px 3px rgba(0,0,0,0.25);
                margin-bottom:100px;
            }

                .slide>p:first-of-type{
                    font-size:1.9rem;
                    font-weight:700;
                    margin-bottom:20px;
                }

                .slide>p:nth-of-type(2){
                    font-size:1.6rem;
                    font-weight:400;
                    margin-bottom:15px;
                }

                .slide>div{
                    display:flex;
                    justify-content: end;
                    align-items:center;
                    gap:5px;
                    margin-top:20px;
                }

                .slide>div>p{
                    font-size:1.5rem;
                    font-weight:500;
                    color:var(--blue);
                }

                .slide>div>img{
                    width:15px;
                }
        
        .slide1{
            /* display:none; */
        }

        .slide2{
            display:none;
        }
        
            .slide2 > ul{
                margin-left:10px;
            }

            .slide2 > ul > li{
                font-size:1.3rem;
                font-weight:300;
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

    .slide{
        padding:30px 40px;
    }


}






@media (min-width:901px){

    .slides{
        width:90%;
        transform:translate(0px, 30px);
    }

    .slide{
        /* padding:50px 40px; */
        line-height:25px;
        margin-bottom:0px;
    }


}






</style>