
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Refridgerator & Coldstorage 1",
            "address": "./images/refrigeration/refrigeration1.webp",
        },
        {
            "title": "Refridgerator & Coldstorage 2",
            "address": "./images/refrigeration/refrigeration2.webp",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Refrigeration and Cold Storage" />
    <Description descript="Preserve freshness and maintain optimal temperatures with advanced refrigeration and cold storage solutions. Ideal for commercial and industrial use, our systems combine energy efficiency with reliable performance to meet all your cooling needs." />
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