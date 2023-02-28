import Swup from 'swup';
import Navigation from "./intro";
import RandomImageFocus from './about-me';
import BorderGenerator from './projects';
// import SwupPreloadPlugin from '@swup/preload-plugin';

const swup = new Swup({
    // plugins: [new SwupPreloadPlugin()]
});

let navigation;
let randomImageFocus;

function init() {
    if (document.querySelector('#nav-wrapper')) {
        console.log("On index page");
        navigation = new Navigation();
    }

    if (document.querySelector('#about-me-text')) {
        console.log("On about me page")
        randomImageFocus = new RandomImageFocus();
    }

    if (document.querySelector('#contact-page-area')) {
        // ...
        console.log("On contact page")
    }

    if (document.querySelector("#project-container")) {
        console.log("On projects page")
        new BorderGenerator();
    }
}


// run once when page loads
if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => init());
}

// run after every additional navigation by swup
swup.on('contentReplaced', init);



//Destroy old scripts runtime.
function unload() {
    if (document.querySelector('#nav-wrapper')) {
        navigation.destroy();
    }
    if (document.querySelector('#about-me-text')) {
        // randomImageFocus.destroy();
    }
}

swup.on('willReplaceContent', unload);
