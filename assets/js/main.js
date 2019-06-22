window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'EU-123456789-9');

window.onload = () => {
    let audio = document.getElementById("bgAudio");
    audio.volume = 0.07;

    var vid = document.getElementById("bgVideo");
    var aud = document.getElementById("bgAudio");

    aud.currentTime = vid.currentTime;
    aud.play();

    document.oncontextmenu = () => false;
}
