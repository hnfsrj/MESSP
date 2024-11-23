
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Solar Energy System & Components 1",
            "address": "./images/solar/solar1.webp",
        },
        {
            "title": "Solar Energy System & Components 2",
            "address": "./images/solar/solar2.webp",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Solar Systems and Components" />
    <Description descript="Harness the power of the sun with advanced solar systems and components. From residential setups to large-scale industrial solutions, our offerings prioritize efficiency, sustainability, and cost savings. Empower your energy independence with tailored solar solutions." />
    <Pictures images = {imgs} />
</div>


<style>

    #container{
        width:100vw;
        box-sizing: border-box;
        min-width:300px;
        max-width:1300px;
        margin:0 auto;
        padding:70px 5%;
    }


@media (min-width:601px){
    #container{
        padding:100px 5%;
    }


}



</style>