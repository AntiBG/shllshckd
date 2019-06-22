window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-121281244-1');

window.onload = () => {
    let audio = document.getElementById("bgAudio");
    audio.volume = 0.10;

    var vid = document.getElementById("bgVideo");
    var aud = document.getElementById("bgAudio");

    aud.currentTime = vid.currentTime;
    aud.play();

    document.oncontextmenu = () => false;
}
