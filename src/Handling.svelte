
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [
        {
            "title": "Handling, Loading & Lifting 1",
            "address": "../images/handling/handling1.jpg",
        },
        {
            "title": "Handling, Loading & Lifting 2",
            "address": "../images/handling/handling2.jpg",
        },

    ];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Handling and Lifting Equipment" />
    <Description descript="Streamline your operations with versatile handling and lifting equipment designed for heavy-duty tasks. From warehouses to construction sites, our equipment offers precision, safety, and durability to meet your toughest challenges." />
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