

<script>

    import {OtherStates} from '../store/Other';

</script>

<div class="blocker">
<section id="vision">

    <div class="vision_block_container">

        <div class="block">

            <div>
                <img class="eye_image" src="/images/eye.svg"/>
                <p>Vision</p>
            </div>

            <p>Engineering the Future, Globally <br/>and Locally</p>

            <p>We envision a world where cutting-edge engineering solutions drive progress, transforming both global and local communities. Our goal is to lead the charge in innovation, providing sustainable, high-quality systems that meet the evolving needs of industries and individuals worldwide. By merging global expertise with a local focus, we ensure that our solutions are not only impactful but also tailored to enhance the specific environments and communities we serve. Through our work, we aspire to shape a smarter, more efficient, and technologically advanced future.</p>
            
        </div>

        {#if $OtherStates.split}
            <div class="line"></div>
        {/if}


        <div class="block">

            <div>
                <img class="gear_image" src="/images/gear.svg"/>
                <p>Mission</p>
            </div>

            <p>Committed to Delivering Premium <br/>Engineering Solutions</p>

            <p>Our mission is to consistently deliver top-tier engineering solutions that exceed expectations. We are dedicated to excellence in every aspect of our work, from design and installation to maintenance and long-term support. Through our commitment to quality, innovation, and precision, we provide solutions that are both functional and sustainable, improving the lives of our clients and the communities they operate in. Our expertise across diverse sectors enables us to offer customized, premium engineering services, always aiming for the highest standards of safety, efficiency, and client satisfaction.</p>
            
        </div>
    
    </div>
    
</section>
</div>

<style>

    #vision{
        padding-top:30%;
        padding-bottom:30%;
    }

    .block:first-of-type{
        margin-bottom:100px;
    }

        .block>div{
            display:flex;
            justify-content: start;
            /* align-items: end; */
            gap:10px;
        }

        .block:first-of-type > div{
            align-items: end;
        }
        
        .block:last-of-type > div{
            align-items: center;
        }

            .eye_image{
                width:18%;
            }
            
            .gear_image{
                width:13%;
            }

            .block>div>p{
                font-size:2.5rem;
                font-weight:700;
                color:var(--blue);
            }

            .block>p>br{
                display:none;
            }

            .block>p:first-of-type{
                font-size:1.8rem;
                font-weight:700;
                margin-top:35px;
                margin-bottom:15px;
            }

            .block>p:last-of-type{
                font-size:1.7rem;
                font-weight:400;
                /* text-align:justify; */
            }

    .line{
        width:5px;
        min-height:100%;
        background:var(--green);
        border-radius:10px;
    }



@media (min-width:401px){

    .eye_image{
        width:16%;
    }

    .gear_image{
        width:12%;
    }

    .block>div>p{
        font-size:3rem;
    }

    .block>p:first-of-type{
        font-size:2.2rem;

    }

    .block>p:last-of-type{
        font-size:1.8rem;

    }


}

@media (min-width:501px){

    .eye_image{
        width:12%;
    }
    
    .gear_image{
        width:9%;
    }

}



@media (min-width:601px){
    #vision{

        padding-top:20%;
        padding-bottom:20%;

    }

    .eye_image{
        width:11%;
        transform:translate(0px, -3px);
    }
    
    .gear_image{
        width:8%;
    }

}


@media (min-width:651px){

    .eye_image{
        width:10%;
    }

    .gear_image{
        width:7%;
    }

}


@media (min-width:701px){
    .eye_image{
        width:9%;
    }

    .gear_image{
        width:6.7%;
    }

}


@media (min-width:801px){
    .eye_image{
        width:8%;
    }

    .gear_image{
        width:6.2%;
    }

}




@media (min-width:995px){
    #vision{
        padding-left:10%;
        padding-right:10%;

    }

    .vision_block_container{
        display:flex;
        justify-content: space-between;
        height:fit-content;
    }

        #vision div.block{
            width:45%;
            margin:0px;
        }

        .block>p>br{
            display:block;
        }
    
    #vision div.block:first-of-type > div{
        /* background:red; */
        transform:translate(0px,-5px);
    }
    
    #vision div.block:last-of-type > div{
        /* background:blue; */
    }

    .eye_image{
        width:14%;
    }

    .gear_image{
        width:11.1%;
    }

}

@media (min-width:1051px){
    #vision div.block:first-of-type > div{
        /* background:red; */
        /* transform:translate(0px,-5px); */
    }
    
    #vision div.block:last-of-type > div{
        /* background:blue; */
    }



    .eye_image{
        width:14%;
    }

    .gear_image{
        width:10.5%;
    }

}

@media (min-width:1101px){
    #vision div.block:first-of-type > div{
        /* background:red; */
        transform:translate(0px,-8px);
    }
}

@media (min-width:1101px){
    #vision div.block:first-of-type > div{
        /* background:red; */
        transform:translate(0px,-12px);
    }
}

@media (min-width:1190px){
    
    .eye_image{
        transform:translate(0px, -2px);
    }

    .gear_image{
        width:9.5%;
    }
}


</style>