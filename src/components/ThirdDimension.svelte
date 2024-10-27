


<script>

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


</script>



<div class="three_container">
    <div class="glow"></div>

    <!-- <canvas id="canvas"></canvas> -->
    <img src="/Adamant/images/helmet/helmet.png" class="landing_pic" />
</div>



<style>

    .three_container{
        position:relative;
        margin-top:20%;
    }


    .glow{
        width:210px;
        aspect-ratio: 1/1;
        background:var(--green);
        opacity: 80%;
        filter:blur(40px);
        margin:0 auto;
    }

    .landing_pic{
        width:180px;
        position:absolute;
        left:50%;
        top:50%;
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