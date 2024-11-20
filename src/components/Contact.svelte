

<script>

    import ContactForm from './ContactForm.svelte';
</script>

<div class="blocker2">
<section id="contact">

    <div class="contact_toper">
        <div class="contact_left">
            <p>Contact Us</p>

            <p>Get in touch with us to discover how we can deliver exceptional electromechanical solutions designed specifically for your business requirements.</p>

            <p>E-MAIL: messpdubai@gmail.com</p>

            <div class="infos_div">

                <div class="info">
                    <div>Dubai Branch</div>

                    <p>MOB: +971 50 278 8978<br/>(UAE)</p>
                    <p>MOB: +251 911 20 60 64<br/>(ETH)</p>
                    <p>DUBAI, UAE</p>

                </div>

            </div>

        </div>

        <ContactForm />
    
    </div>

    <h6>© 2024 MESSP.<br/>All Rights Reserved.</h6>

</section>
</div>


<style>

    #contact{
        background:var(--blue);
        position:relative;
        min-width:300px;
        max-width:1300px;
        margin:0 auto;
    }

        .contact_toper{
            margin-bottom:50px;
        }


        .contact_left>p:first-of-type{
            color:var(--green);
            font-weight:700;
            font-size:3rem;
            margin-bottom:20px;
        }


        .contact_left>p:nth-of-type(2){
            color:white;
            font-weight:500;
            font-size:1.6rem;
            margin-bottom:20px;
            line-height:22px;
        }


        .contact_left>p:last-of-type{
            color:white;
            font-weight:400;
            font-size:1.4rem;
            margin-bottom:40px;
        }


        .info{
            color:white;
            width:100%;
            margin-bottom:40px;
        }

            .info>div{
                color:white;
                background:var(--green);
                border-radius:13px;
                width:50%;
                padding:7px 0px;
                display:flex;
                justify-content: center;
                align-items: center;
                font-size:1.5rem;
                font-weight:600;
                margin-bottom:15px;

            }

            .info p{
                font-size:1.5rem;
                font-weight:400;
                margin-bottom:7px;
            }


    h6{
        color:white;
        font-size:1.4rem;
        font-weight:500;
        text-align:center;
        position: absolute;
        width:100%;
        bottom:20px;
        left:0px;

    }




@media (min-width:401px){
    #contact{
        padding-top:60px;
        padding-bottom:60px;
    }

    .contact_left>p:first-of-type{
        font-size:4rem;
    }

    .contact_left>p:nth-of-type(2){
        font-size:2rem;
        font-weight:400;
        line-height:25px;
    }

    .contact_left>p:last-of-type{
        font-size:1.6rem;
    }

    .info>div{
        width:40%;
        padding:10px 0px;
        font-size:1.7rem;
    }

    .info p{
        font-size:1.6rem;
        margin-bottom:10px;
    }




}



@media (min-width:501px){
    
    .contact_left>p:nth-of-type(2){
        font-weight:300;
    }
    
    .contact_left>p:last-of-type{
        font-weight:300;
    }

    .info p{
        font-weight:300;
    }

    .infos_div{
        display:flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom:40px;
    }

    .info{
        width:45%;
        margin:0px;
    }

    .info>div{
        width:80%;
        padding:0px;
        height:35px;
    }

}



@media (min-width:601px){

    .contact_left>p:nth-of-type(2){
        font-weight:300;
    }
    
    .contact_left>p:last-of-type{
        font-weight:300;
    }

    .infos_div{
        margin-bottom:15%;
    }

    .info p{
        font-weight:300;
    }

    .info>div{
        width:65%;

    }
}

@media (min-width:801px){

    .info>div{
        width:60%;
    }

}


@media (min-width:901px){
    #contact{
        padding-left: 5%;
        padding-right: 5%;
    }

    .contact_toper{
        display:flex;
        justify-content: space-between;
    }


    .contact_left{
        width:45%;
    }

    .contact_left>p:nth-of-type(2){
        font-size:1.8rem;
    }

    .contact_left>p:last-of-type{
        font-size:1.6rem;
    }

    .infos_div{
        margin: top 15%;
    }

    .info{
        width:47%;
    }

    .info>div{
        width:90%;
        height:35px;
        font-size:1.6rem;
    }

    
    .info p{
        font-size:1.5rem;
        margin-bottom:10px;
    }



}





@media (min-width:1001px){

    .contact_left{
        width:50%;
    }

    .contact_left>p:nth-of-type(2){
        font-size:1.9rem;
    }



    .info{
        width:45%;

    }

    .info>div{
        width:70%;
        font-size:1.7rem;
    }

    


}










</style>