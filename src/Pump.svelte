
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
    <Title name="Pumps Valves and Engines" />
    <Description descript="Ensure seamless operations with high-quality pumps, valves, and engines designed for durability and efficiency. Perfect for industrial and commercial applications, our products deliver exceptional performance while minimizing downtime. Backed by expert support and tailored solutions, trust us to keep your systems running smoothly." />
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