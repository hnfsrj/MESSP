
<script>
    import { getContext, onMount } from "svelte";

    const observer = getContext('observer');


    onMount(()=>{

        observer.observe(document.querySelector("form>input[type='submit']"));

        return () => observer.unobserve(document.querySelector("form>input[type='submit']"));
    });
</script>

<div class="form_container">

    <p>Get in Touch</p>

    <form action="https://formspree.io/f/xyzyeolz" method="POST">

        <input type="text" placeholder="Name" name="Name" required />
        <input type="email" placeholder="Email" name="Email" required />
        <input type="text" placeholder="Subject" name="Subject" required />
        <textarea placeholder="Message" name="Message" required></textarea>

        <input class="effect_wide animate_wide" type="submit" value="Submit" />
    </form>


</div>

<style>

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

form>input[type="submit"].effect_wide{
        width:0%;

    }

    .animate_wide{
        -webkit-transition: width 0.5s;
        -o-transition: width 0.5s;
        transition: width 0.5s;
    }


    .form_container{
        background:white;
        font-family:"itim";
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        width:100%;
        border-radius:10px;
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.25);
                box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.25);
        padding:20px 10px;
        font-size:1.6rem;
        
    }

        .form_container>p{
            margin-bottom:15px;
        }

        form{}

            form input:not([type="submit"]){
                border:2px solid black;
                border-radius:10px;
                width:100%;
                -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                padding:0px 10px;
                height:40px;
                margin-bottom:10px;
            }

            form textarea{
                border:2px solid black;
                border-radius:10px;
                -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                padding:5px 10px;
                width:100%;
                resize: none;
                height:100px;
            }

            form input[type="submit"]{
                display: block;
                color:white;
                background:var(--green);
                outline:none;
                border:none;
                -webkit-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.25);
                        box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.25);
                width:80%;
                margin:0 auto;
                margin-top:30px;
                border-radius:15px;
                height:40px;
                font-size:2rem;
                font-weight:700;
            }





@media (min-width:401px){

    .form_container{
        padding:25px 10px;
        
    }

    .form_container>p{
        margin-bottom:25px;
        font-size:2rem;
    }

    form input:not([type="submit"]){
        height:55px;
        margin-bottom:15px;
        font-size:1.8rem;
    }


    form textarea{
        height:140px;
        padding:10px;
        font-size:1.8rem;
    }


    form input[type="submit"]{
        height:50px;
        font-size:2.5rem;
    }



}


@media (min-width:501px){

    .form_container{
        width:95%;
        margin:0 auto;
        padding:25px 20px;
    }

    form input:not([type="submit"]){
        height:50px;
        margin-bottom:15px;
        font-size:1.8rem;
    }


    form textarea{
        height:140px;
        padding:10px;
        font-size:1.6rem;
    }


    form input[type="submit"]{
        height:50px;
        font-size:2.5rem;
        width:70%
    }


}




@media (min-width:601px){

    .form_container{
        width:87%;
        padding:30px 5%;
    }

}

@media (min-width:751px){

.form_container{
    width:85%;
    padding:30px 5%;
}

}


@media (min-width:801px){
    .form_container{
        width:80%;
    }
}


@media (min-width:851px){
    .form_container{
        width:70%;
    }
}


@media (min-width:901px){
    
    .form_container{
        margin:0px;
        width:50%;
        padding:30px 2%;
    }
}


@media (min-width:1001px){
    
    .form_container{
        width:45%;
        padding:40px 3%;
    }

}




</style>