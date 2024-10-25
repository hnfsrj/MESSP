import {writable} from 'svelte/store';


export const NavStore = writable({
    "fix":false,
    "wide":false,
    "drop":false
});