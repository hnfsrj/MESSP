
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Lift Escalators",
            "address": "../images/lift/lift1.webp",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Lifts and Escalators" />
    <Description descript="Enhance mobility and convenience with our reliable lifts and escalators. Engineered for safety, efficiency, and modern aesthetics, they are ideal for residential, commercial, and industrial spaces. Count on professional installation and maintenance to ensure uninterrupted operation." />
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