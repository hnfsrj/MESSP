

<script>

	import Router from 'svelte-spa-router';
	import Home from './Home.svelte';
	import Air from './Air.svelte';
	import Pump from './Pump.svelte';
	import Lift from './Lift.svelte';
	import Solar from './Solar.svelte';
	import Power from './Power.svelte';
	import Handling from './Handling.svelte';
	import Industrial from './Industrial.svelte';
	import Refrigeration from './Refrigeration.svelte';

	function resize_handler(){
		let width = window.innerWidth;

		console.log(width);
	}


	resize_handler();
	window.addEventListener("resize", resize_handler);

</script>


<Router routes={{
	'/': Home,
	'/air': Air,
	'/pump': Pump,
	'/lift': Lift,
	'/solar': Solar,
	'/power': Power,
	'/handling': Handling,
	'/industrial': Industrial,
	'/refrigeration': Refrigeration
}} />
