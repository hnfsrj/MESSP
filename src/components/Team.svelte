

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
<section id="team">

    <p>Team</p>

    <div class="teaming">
        <p class="team_writing">
            The foundation of MESSP’s success lies in our dedicated team of seasoned professionals and experienced management, boasting over 25 years of expertise in the electromechanical industry. Complemented by a team of highly skilled and self-driven technical staff, we bring unparalleled value to our clients.
            <br/><br/>
            At MESSP, our team is more than just a group of individuals; it is a community of passionate, honest, and solution-oriented experts. We believe that extraordinary results emerge when people work collaboratively with tenacity and a shared commitment to tackling the most complex challenges.
        </p>

        <div class="ways_container">
            <div class="effect_right animate_right way">

                <img src="images/electrical.svg" />

                <div class="way_text">
                    <p>Electrical Engineers</p>

                    <p>Designing and implementing innovative electrical systems, ensuring efficiency, reliability, and adherence to safety standards.</p>
                </div>

            </div>

            <div class="effect_right animate_right way">

                <img src="images/mechanical.svg" />

                <div class="way_text">
                    <p>Mechanical Engineers</p>

                    <p>Developing and maintaining mechanical systems, focusing on precision, durability, and seamless functionality for diverse applications.</p>
                </div>

            </div>


            <div class="effect_right animate_right way">

                <img src="images/technician.svg" />

                <div class="way_text">
                    <p>Technicians</p>

                    <p>Providing hands-on expertise in installation, troubleshooting, and maintenance to keep systems running smoothly and effectively.</p>
                </div>

            </div>  


            <div class="effect_right animate_right way">

                <img src="images/administrator.svg" />

                <div class="way_text">
                    <p>Administration Staffs</p>

                    <p>Managing operations, logistics, and client relations to ensure seamless service delivery and organizational efficiency.</p>
                </div>

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
    
    #team{}

        #team > p{
            text-align:center;
            font-size:3rem;
            font-weight:700;
            color:var(--red);
            margin-bottom:30px;
        }

        #team .team_writing{
            color:black;
            margin-top:10%;
            margin-bottom:80px;
            font-size:1.7rem;
            font-weight:400;
            text-align:start;
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

    #team{
        padding-top:60px;
        padding-bottom:60px;
    }

    #team > p{
        font-size:3.3rem;
        margin-bottom:45px;
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


@media (min-width:1101px){
    
    #team{
        padding-right:10%;
        padding-left:10%;
    }

    .teaming{
        display:flex;
        justify-content: space-between;
    }

    #team .teaming > p.team_writing{
        width:40%;
        margin:0px;
        font-size:1.9rem;
        font-weight:500;
    }

    #team .teaming > div.ways_container{
        width:50%;
        margin:0px;
    }
        #team .teaming > div.ways_container > div.way{
            margin-bottom:20px;
        }


}



@media (min-width:1051px){

    .ways_container{
        width:90%;
    }

}






</style>