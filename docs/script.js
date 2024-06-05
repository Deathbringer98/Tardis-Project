document.addEventListener("DOMContentLoaded", () => {
    const tardis = document.querySelector(".tardis");
    const flash = document.querySelector(".flash");
    const wormhole = document.querySelector(".wormhole");
    const audio = document.getElementById("tardis-sound");
    const vortexes = ['vortex.gif', 'votex2.gif', 'vortex3.gif', 'vortex4.gif'];
    let currentVortex = 0;

    // Play the TARDIS sound when the page loads
    audio.play();

    function animateTardis() {
        tardis.style.animation = "none";
        tardis.offsetHeight; /* trigger reflow */
        tardis.style.animation = "travel 5s linear infinite, spin-tardis 5s linear infinite";
        flash.style.animation = "flash 0.5s";
        setTimeout(() => {
            flash.style.animation = "none";
        }, 500);

        // Change the vortex background
        currentVortex = (currentVortex + 1) % vortexes.length;
        wormhole.style.backgroundImage = `url('${vortexes[currentVortex]}')`;
    }

    setInterval(animateTardis, 5000);
});
