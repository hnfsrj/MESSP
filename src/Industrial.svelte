
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Industrial Plant & Spare parts 1",
            "address": "../images/industrial/industrial1.jpg",
        },
        {
            "title": "Industrial Plant & Spare Parts",
            "address": "../images/industrial/industrial2.jpg",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Industrial Equipment and Spare Parts" />
    <Description descript="Optimize your production processes with premium industrial equipment and spare parts. Designed to enhance efficiency and reduce downtime, our wide range of solutions caters to the needs of diverse industries." />
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