

<script>
    export let marginTop = 0;
</script>

<div style="margin-top:{marginTop}%;">
    <button>Services</button>
</div>


<style>

    div{
        width:100%;
        display:flex;
        justify-content: center;
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

</style>