
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

const delay = ms => new Promise(res => setTimeout(res, ms));
window.onload = async () => {
    var w = document.documentElement.clientWidth || window.innerWidth;

    // stop scrolling to let animation play on desktops
    if(w > 1350){
        disableScroll();
        await delay(2000);
        enableScroll();
        // let path = anime.path("#motion-path");

        // anime({
        //     targets: "#object",
        //     translateX: path('x'),
        //     transalteY: path('y'),
        //     easing: 'linear',
        //     duration: 4000,
        //     loop: false
        // })
    }
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}