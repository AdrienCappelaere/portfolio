/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../sass/app.scss';
import 'css.gg/icons/all.scss';


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
import './scroll';
import './notification';
// import './menu';
// import 'clipboard/dist/clipboard.min';

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1803140,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

var btn = document.getElementsByClassName('copy');
console.log(btn);
var clipboard = new ClipboardJS(btn);

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});


console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
