
<script>

    import ServicesButton from './ServicesButton.svelte';
    import ThirdDimension from './ThirdDimension.svelte';

</script>


<section id="landing">
    <p>Adamant <br/> Engineering</p>

    <p>Committed to delivering premium<br/>engineering solutions</p>

    <ServicesButton marginTop=20 />
    <ThirdDimension marginTop=20 />
</section>


<style>

    #landing{
        height:100vh;
    }

    section>p:first-of-type{
        margin-top:20%;
        text-align:center;
        font-size:4rem;
        font-weight:700;
        color:var(--blue);
        
    }

    section>p:last-of-type{
        color:var(--blue);
        font-size:1.6rem;
        text-align:center;
        margin-top:10%;
        font-weight:500;
    }


</style>