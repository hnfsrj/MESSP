<script>

	import { onMount, onDestroy } from "svelte";
	import {NavStore} from './store/Store';
	import {OtherStates} from './store/Other';

	import Nav from './components/Nav.svelte';
	import Landing from './components/Landing.svelte';
	import About from './components/About.svelte';
	import Vision from './components/Vision.svelte';
	import Services from './components/Services.svelte';
	import Distinction from './components/Distinction.svelte';
	import Approach from './components/Approach.svelte';
	import Contact from './components/Contact.svelte';


	function resize_handler(){
		let width = window.innerWidth;

		console.log(width);
		
		if (width >= 701){
			NavStore.update(current_state => {
                return {...current_state, "wide":true};
            });
		}else{
			NavStore.update(current_state => {
                return {...current_state, "wide":false};
            });
		}


		if (width>=995){
			OtherStates.update(current_state => {
                return {...current_state, "split":true};
            });
		}else{
			OtherStates.update(current_state => {
                return {...current_state, "split":false};
            });
		}

	}

	onMount(()=>{
		resize_handler();
		window.addEventListener("resize", resize_handler);
	});
	
	onDestroy(()=>{
		window.removeEventListener("resize", resize_handler);
	});


</script>


<div id="container">
	<Nav/>
	<Landing/>
	<About/>
	<Vision/>
	<Services/>
	<Distinction/>
	<Approach/>
	<Contact/>
</div>


<style>

</style>