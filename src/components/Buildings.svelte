
<script>
    import {getContext, onMount} from 'svelte';

    const observeElements = getContext('observeElements');
    const unobserveElements = getContext('unobserveElements');


    

    onMount(()=>{
        let elements = [];

        elements.push(document.querySelector('.building1'));
        elements.push(document.querySelector('.building2'));
        elements.push(document.querySelector('.building3'));
        elements.push(document.querySelector('.building4'));
        elements.push(document.querySelector('.building5'));
        elements.push(document.querySelector('.building6'));
        elements.push(document.querySelector('.building7'));
        elements.push(document.querySelector('.building8'));
        elements.push(document.querySelector('.building9'));
        elements.push(document.querySelector('.buildings'));

        observeElements(elements);

        return () => unobserveElements(elements);
    });

</script>


<div class="effect_line animate_line buildings">

    <img src="images/building1.svg" class="effect_up animate_up animate_up1 building building1"/>
    <img src="images/building2.svg" class="effect_up animate_up animate_up2 building building2"/>
    <img src="images/building3.svg" class="effect_up animate_up animate_up3 building building3"/>
    <img src="images/building4.svg" class="effect_up animate_up animate_up4 building building4"/>
    <img src="images/building2.svg" class="effect_up animate_up animate_up5 building building5"/>
    <img src="images/building3.svg" class="effect_up animate_up animate_up6 building building6"/>
    <img src="images/building4.svg" class="effect_up animate_up animate_up7 building building7"/>
    <img src="images/building5.svg" class="effect_up animate_up animate_up8 building building8"/>
    <img src="images/building2.svg" class="effect_up animate_up animate_up9 building building9"/>

</div>


<style>

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

div.effect_line{
        border-bottom: none;
    }

    .animate_line{
        -webkit-transition: border 0.5s;
        -o-transition: border 0.5s;
        transition: border 0.5s;
        -webkit-transition-delay:2s;
             -o-transition-delay:2s;
                transition-delay:2s;
    }


    .effect_up{
        -webkit-transform: translate(0px, 30px);
            -ms-transform: translate(0px, 30px);
                transform: translate(0px, 30px);
    }

    .animate_up{
        -webkit-transition: -webkit-transform 0.7s;
        transition: -webkit-transform 0.7s;
        -o-transition: transform 0.7s;
        transition: transform 0.7s;
        transition: transform 0.7s, -webkit-transform 0.7s;
    }


    .animate_up1{
        -webkit-transition-delay: 0s;
             -o-transition-delay: 0s;
                transition-delay: 0s;
    }

    .animate_up2{
        -webkit-transition-delay: 0.2s;
             -o-transition-delay: 0.2s;
                transition-delay: 0.2s;
    }

    .animate_up3{
        -webkit-transition-delay: 0.4s;
             -o-transition-delay: 0.4s;
                transition-delay: 0.4s;
    }

    .animate_up4{
        -webkit-transition-delay: 0.6s;
             -o-transition-delay: 0.6s;
                transition-delay: 0.6s;
    }

    .animate_up5{
        -webkit-transition-delay: 0.8s;
             -o-transition-delay: 0.8s;
                transition-delay: 0.8s;
    }

    .animate_up6{
        -webkit-transition-delay: 1s;
             -o-transition-delay: 1s;
                transition-delay: 1s;
    }

    .animate_up7{
        -webkit-transition-delay: 1.2s;
             -o-transition-delay: 1.2s;
                transition-delay: 1.2s;
    }

    .animate_up8{
        -webkit-transition-delay: 1.4s;
             -o-transition-delay: 1.4s;
                transition-delay: 1.4s;
    }

    .animate_up9{
        -webkit-transition-delay: 1.6s;
             -o-transition-delay: 1.6s;
                transition-delay: 1.6s;
    }

    .buildings{
        border-bottom:2px solid black;
        position:absolute;
        width:100%;
        bottom:0px;
        left:0px;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding-left:16px;
    }


        img.building1{
            width:19px;
        }

        img.building2{
            width:29px;
        }

        img.building3{
            width:32px;
        }

        img.building4{
            width:22px;
        }

        img.building5{
            width:22px;
        }

        img.building6{
            width:17px;
        }

        img.building7{
            width:12px;
        }

        img.building8{
            width:21px;
        }

        img.building9{
            width:33px;
        }



@media (min-width:401px){

    img.building{
        width:8%;
    }

}



@media (min-width:501px){

    .buildings{
        padding-left:6%;
    
    }

    img.building{
        width:6%;
    }
}


@media (min-width:601px){

    img.building{
        width:5.5%;
    }
}



@media (min-width:701px){
    img.building{
        width:5%;
    }
}

@media (min-width:701px){
    img.building{
        width:4.5%;
    }
}

@media (min-width:901px){


    .buildings{
        padding-left:8%;
    }

    img.building{
        width:4%;
    }


}



@media (min-width:1051px){

    img.building{
        width:3.5%;
    }

}







</style>