
<script>

</script>

<div class="form_container">

    <p>Get in Touch</p>

    <form>

        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
        <textarea placeholder="Message"></textarea>

        <input type="submit" value="Submit" />
    </form>


</div>

<style>

    .form_container{
        background:white;
        font-family:"itim";
        box-sizing: border-box;
        width:100%;
        border-radius:10px;
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
                box-sizing: border-box;
                padding:0px 10px;
                height:40px;
                margin-bottom:10px;
            }

            form textarea{
                border:2px solid black;
                border-radius:10px;
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
                box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.25);
                width:80%;
                margin:0 auto;
                margin-top:30px;
                border-radius:15px;
                height:40px;
                font-size:2rem;
                font-weight:700;
            }

</style>