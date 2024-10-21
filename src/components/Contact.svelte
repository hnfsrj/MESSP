

<script>

    import ContactForm from './ContactForm.svelte';
</script>

<section id="contact">

    <p>Contact Us</p>

    <p>Email, call or complete the form to learn how we can provide you with premium engineering solutions tailored to your needs.</p>

    <p>E-MAIL: adamantexport@gmail.com</p>

    <div class="info">
        <div>Head Office</div>

        <p>MOB: +251 911 24 64 75</p>
        <p>OFF: +251 114 70 29 11</p>
        <p>GOFA GEBRIEL JFK BUILDING 3RD</p>
        <p>FLOOR P.O.BOX 8853</p>
        <p>ADDIS ABABA, ETHIOPIA</p>
    </div>


    <div class="info">
        <div>Dubain Branch</div>

        <p>MOB: +971 50 968 1540</p>
        <p>OFF: +971 4 345 7172</p>
        <p>DUBAI SHOPPING CENTRE, 1ST FLOOR</p>
        <p>P.O.BOX 251006</p>
        <p>DUBAI, UAE</p>

    </div>


    <ContactForm />

    <h6>© 2024 Adamant Engineering.<br/>All Rights Reserved.</h6>

</section>

<style>

    #contact{
        background:var(--blue);
    }

        #contact>p:first-of-type{
            color:var(--green);
            font-weight:700;
            font-size:3rem;
            margin-bottom:20px;
        }


        #contact>p:nth-of-type(2){
            color:white;
            font-weight:500;
            font-size:1.6rem;
            margin-bottom:20px;
        }


        #contact>p:last-of-type{
            color:white;
            font-weight:500;
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
                font-weight:500;
            }


    h6{
        color:white;
        margin-top:60px;
        font-size:1.4rem;
        font-weight:500;
        text-align:center;

    }



</style>