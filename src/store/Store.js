import {writable} from 'svelte/store';


export const NavStore = writable({
    "fix":true,
    "wide":true,
    "drop":false
});