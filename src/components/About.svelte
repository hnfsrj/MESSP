
<script>

    import Buildings from './Buildings.svelte';

</script>


<section id="about">
    <p>Who We Are</p>

    <p>
        Adamant Engineering is a new chapter in our journey, launched in 2022 with a focus on self-reliance and local production. As part of Adamant Holding, we build on years of experience in global trade and industry, but this venture is different. It’s about bringing innovation to East Africa and reducing the need for imports by growing what we can produce here at home.
        <br/><br/>
        Led by Mr. Ketema, our team is committed to changing how we view engineering and production. We’re not just creating systems; we’re shaping a future where East African industries stand strong, backed by the latest technology and international partnerships. Adamant Engineering isn’t just a business—it’s a mission to strengthen local manufacturing, push boundaries, and lead the way in building sustainable solutions for our economy.
    </p>

    <Buildings />
</section>


<style>

    section>p:first-of-type{
        margin-top:20%;
        font-size:3rem;
        font-weight:700;
        color:var(--blue);
        
    }

    section>p:last-of-type{
        color:black;
        margin-top:10%;
        font-size:1.8rem;
        font-weight:500;
    }


</style>