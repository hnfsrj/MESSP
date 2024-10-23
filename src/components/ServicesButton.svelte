
<script>
    export let margined = false;
</script>


<div class:margined = {margined} class:unmargined = {!margined}>
    <button>Services</button>
</div>


<style>

    div{
        display:flex;
        justify-content: center;
    }

        div.margined{
            margin-top:20%;
        }

    button{
        background:var(--green);
        color:white;
        font-size:2.2rem;
        width:190px;
        height:45px;
        outline:none;
        border:none;
        font-weight:700;
        border-radius: 15px;
        box-shadow: -3px 3px 4.4px 1.35px rgba(0,0,0,0.25);
    }


@media (min-width:401px){

    div.margined > button{
        height:50px;
    }

}


@media (min-width:550px){
    div.margined{
        margin-top:11%;
        
    }
    

}



@media (min-width:701px){
    button{
        width:100px;
        height:35px;
        font-size:1.6rem;
    }



}







</style>