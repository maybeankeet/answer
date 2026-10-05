// ==========================================
// OPEN LOVE LETTER
// ==========================================

function openLetter() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = [
        "💙",
        "🩵",
        "❤️",
        "💗",
        "💖",
        "✨",
        "🌸"
    ];

    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    document.getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(createHeart, 700);


// ==========================================
// FINAL YES BUTTON
// ==========================================

function sayYes() {

    const message =
        document.getElementById("finalMessage");

    message.style.display = "block";


    // Create celebration hearts

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            const symbols = [
                "💙",
                "💍",
                "🌹",
                "💐",
                "❤️",
                "✨"
            ];

            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                20 + Math.random() * 30 + "px";

            heart.style.animationDuration =
                3 + Math.random() * 4 + "s";

            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 8000);

        }, i * 70);

    }

}


// ==========================================
// CLICK ANYWHERE = LITTLE HEART
// ==========================================

document.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {
        return;
    }


    const heart =
        document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left =
        event.clientX + "px";
    heart.style.top =
        event.clientY + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.style.fontSize = "20px";

    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(.5)",
                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -130px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );


    setTimeout(() => {

        heart.remove();

    }, 900);

});
