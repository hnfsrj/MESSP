
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Ac-dc power distribution systems",
            "address": "./images/power/power1.webp",
        },
        {
            "title": "Electricity generation, transmission, distribution guides",
            "address": "./images/power/power2.webp",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Power Equipment and Distribution" />
    <Description descript="Power your operations with cutting-edge equipment and distribution systems. Built for reliability and performance, our solutions ensure seamless electricity flow for homes, businesses, and industries. Trust our expertise to deliver robust energy solutions." />
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