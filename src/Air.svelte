
<script>

    import Top from './components/sub_components/Top.svelte';
    import Back from './components/sub_components/Back.svelte';
    import Title from './components/sub_components/Title.svelte';
    import Description from './components/sub_components/Description.svelte';
    import Pictures from './components/sub_components/Pictures.svelte';

    let imgs = [1,1,1,1,1];

</script>


<div id="container">
    <Top />
    <Back />
    <Title name="Air Condition Trading" />
    <Description descript="Stay cool and comfortable with top-quality, energy-efficient air conditioning units from trusted brands. Whether for your home or business, enjoy seamless installation, reliable maintenance, and exceptional performance tailored to your cooling needs. Upgrade your climate control today with solutions designed for comfort and sustainability." />
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