import { DotLottie } from '@lottiefiles/dotlottie-web';

document.addEventListener('DOMContentLoaded', function() {
    const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#dotlottie-canvas'),
        src: 'lottie JSON/Animation - 1740495001397 - Copy.json' // replace with the correct path to your Lottie JSON file
    });

    window.addEventListener('load', function() {
        document.getElementById('loading-animation').classList.add('hidden');
    });
});