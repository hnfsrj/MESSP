


<script>

    import { getContext, onMount } from "svelte";


    // import { onMount, onDestroy } from "svelte";

    // import * as THREE from 'three';
    // import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

    // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    // onMount(() => {


    //     const canvas = document.querySelector("#canvas");

    //     const size = {
    //         "width":canvas.clientWidth,
    //         "height":canvas.clientHeight,
    //     };

    //     const angle = THREE.MathUtils.degToRad(25); 

    //     const scene = new THREE.Scene();


    //     const light = new THREE.PointLight(0xffffff, 200, 100)
    //     light.position.set(0,10,10);
    //     scene.add(light);

    //     const light2 = new THREE.PointLight(0xffffff, 200, 100)
    //     light2.position.set(0,10,-10);
    //     scene.add(light2);


    //     const loader = new GLTFLoader();
    //     loader.load( 
    //         '../../models/helmet.glb',
    //         function ( gltf ) { 
    //             gltf.scene.rotation.x += angle;
    //             scene.add( gltf.scene ); 
    //         }, 
    //         undefined, 
    //         function ( error ) { 
    //             console.error( error ); 
    //         } 
    //     );

        
    //     const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 100);
    //     camera.position.z = 0.4;
    //     scene.add(camera);


    //     const renderer = new THREE.WebGLRenderer({ canvas , alpha:true });
    //     renderer.setSize(size.width, size.height);

    //     renderer.render(scene,camera);

        
    //     function react_to_resize(){
    //         size.width = canvas.clientWidth;
    //         size.height = canvas.clientHeight;

    //         camera.aspect = size.width / size.height;
    //         camera.updateProjectionMatrix();

    //         renderer.setSize(size.width, size.height);
    //     }

    //     window.addEventListener('resize', react_to_resize);

            


    //     const controls = new OrbitControls(camera, canvas);
    //     controls.autoRotate = true;
    //     controls.autoRotateSpeed = -2.0;

    //     controls.enableRotate = false;
    //     controls.enableZoom = false;
    //     controls.enablePan = false; 



    //     const loop = () => {
    //         controls.update();
    //         renderer.render(scene,camera);
    //         window.requestAnimationFrame(loop);
    //     }

    //     loop();



    // });

    
    // onDestroy(()=>{
    //     window.removeEventListener('resize',react_to_resize);
    // });


    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    onMount(()=>{
        let elements = [];

        elements.push(document.querySelector('.three_container'));

        observeElements(elements);

        return () => unobserveElements(elements);
    });


</script>



<div class="effect_shrink animate_shrink three_container">
    <div class="glow"></div>

    <!-- <canvas id="canvas"></canvas> -->
    <img src="images/helmet/helmet.png" class="landing_pic" />
</div>



<style>


/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.effect_shrink{
        -webkit-transform: scale(0.1);
            -ms-transform: scale(0.1);
                transform: scale(0.1);
    }

    .animate_shrink{
        -webkit-transition: -webkit-transform 1.5s;
        transition: -webkit-transform 1.5s;
        -o-transition: transform 1.5s;
        transition: transform 1.5s;
        transition: transform 1.5s, -webkit-transform 1.5s;
    }


    .three_container{
        position:relative;
        margin-top:20%;
    }


    .glow{
        width:210px;
        aspect-ratio: 1/1;
        background:var(--green);
        opacity: 80%;
        -webkit-filter:blur(40px);
                filter:blur(40px);
        margin:0 auto;
    }

    .landing_pic{
        width:180px;
        position:absolute;
        left:50%;
        top:50%;
        -webkit-transform:translate(-50%,-50%);
            -ms-transform:translate(-50%,-50%);
                transform:translate(-50%,-50%);
    }

    /* canvas{ */
        /* display:none; */
        /* position:absolute; */
        /* width:200px; */
        /* aspect-ratio: 1/1; */
        /* background:orange; */
        /* left:50%; */
        /* top:50%; */
        /* transform:translate(-50%,-50%); */
    /* } */


@media (min-width:401px){
    .three_container{
        margin-top:30%;
    } 

}


@media (min-width:550px){
    .three_container{
        margin-top:20%;
    }
}

@media (min-width:601px){
    .three_container{
        margin-top:15%;
    }

    .glow{
        width:230px;
    }

    .landing_pic{
        width:220px;
    }
}



@media (min-width:771px){
    .three_container{
        margin-top:11%;
    } 

}
    

@media (min-width:1101px){

    .three_container{
        margin-top:10%;
    }

    .glow{
        width:230px;
    }

    .landing_pic{
        width:200px;
    }

}


@media (min-width:1201px){

    .three_container{
        margin-top:8%;
    }

    .glow{
        width:230px;
    }

    .landing_pic{
        width:200px;
    }

}



</style>