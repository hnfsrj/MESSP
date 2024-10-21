

<script>

    import Chooser from './Chooser.svelte';
    import Slides from './Slides.svelte';
    import Pictures from './Pictures.svelte';

</script>


<section id="services">

    <div class="services_container">

        <div class="top">
            <p>Supporting Clients in Six Essential Sectors</p>

            <Chooser />

        </div>


        <div class="bottom">
            <Slides />
        </div>

    </div>

    <Pictures />


</section>


<style>

    #services{
        position:relative;
    }

    .services_container{
        display:flex;
        flex-direction:column;
        justify-content: center;
    }

        .top{
            text-align:center;
        }

        .top>p{
            color:var(--blue);
            font-size:2rem;
            font-weight:700;
            margin-bottom:50px;
        }

    .bottom{}

</style>