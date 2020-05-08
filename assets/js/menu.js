
(function() {
    getActive();
})();

function getActive() {
    let fullpath = window.location.host + window.location.pathname;

    let links = document.getElementsByClassName("navbar-item").getAttribute("href");
    for (let i = 0; i<links.length; i++)
    {
        console.log(links)
    }


    /*
    if (fullpath == ) {

    }
    */
}
/*
const links = document.querySelectorAll('.scroll');
links.forEach(each => (each.onclick = scrollAnchors));
*/
