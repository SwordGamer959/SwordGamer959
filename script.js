/* =========================================================
   SWORDGAMER959
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ====================================================== */

    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loaderBar");
    const loaderPercent = document.getElementById("loaderPercent");

    let progress = 0;

    const loading = setInterval(() => {

        progress += Math.floor(Math.random() * 5) + 1;

        if (progress >= 100) {
            progress = 100;

            clearInterval(loading);

            setTimeout(() => {
                loader.classList.add("hide");
            }, 500);
        }

        loaderBar.style.width = `${progress}%`;
        loaderPercent.textContent = `${progress}%`;

    }, 60);


    /* =====================================================
       LIVE CLOCK
    ====================================================== */

    const clock = document.getElementById("clock");

    function updateClock() {

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        clock.textContent =
            `${hours}:${minutes}:${seconds}`;
    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const navigation =
        document.getElementById("navigation");

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });


    /* =====================================================
       CLOSE MOBILE MENU
    ====================================================== */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {
                            link.classList.remove("active");
                        });

                        const active =
                            document.querySelector(
                                `.nav-link[href="#${entry.target.id}"]`
                            );

                        if (active) {
                            active.classList.add("active");
                        }

                    }

                });

            },
            {
                threshold: 0.35
            }
        );

    sections.forEach(section => {
        observer.observe(section);
    });


    /* =====================================================
       PARTICLES
    ====================================================== */

    const particles =
        document.getElementById("particles");

    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 15}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        particle.style.opacity =
            `${0.2 + Math.random() * 0.8}`;

        particles.appendChild(particle);
    }


    /* =====================================================
       MOUSE PARALLAX
    ====================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual) {

        document.addEventListener("mousemove", event => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 2;

            heroVisual.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        });

    }


    /* =====================================================
       IMAGE CHECK
    ====================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        });

        image.addEventListener("load", () => {

            console.log(
                "Image loaded:",
                image.src
            );

        });

    });


    /* =====================================================
       GAME CARD EFFECT
    ====================================================== */

    const gameCards =
        document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;

            card.style.transform =
                `translateY(-10px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       CONSOLE
    ====================================================== */

    console.log(
        "%c SWORDGAMER959 GAMING CORE ",
        "background:#030305;color:#4dd9ff;font-size:18px;padding:10px;"
    );

    console.log(
        "%c SYSTEM ONLINE ",
        "color:#39ff88;font-weight:bold;"
    );

    console.log(
        "%c ROBLOX DATABASE LOADED ",
        "color:#ff1744;font-weight:bold;"
    );

    console.log(
        "%c MORE GAME DATABASE LOADED ",
        "color:#4dd9ff;font-weight:bold;"
    );

});