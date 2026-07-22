window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#002c6b";
    } else {
        header.style.background = "#0047AB";
    }
});

const prayerForm = document.getElementById("prayer-form");
const formStatus = document.getElementById("form-status");

if (prayerForm) {
    prayerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("prayer-name").value.trim();
        const email = document.getElementById("prayer-email").value.trim();
        const message = document.getElementById("prayer-message").value.trim();

        if (!name || !message) {
            formStatus.textContent = "Please enter your name and prayer request.";
            formStatus.style.color = "#b91c1c";
            return;
        }

        const whatsappNumber = "2348036972689";
        const text = encodeURIComponent(
            `Prayer Request\nName: ${name}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`
        );

        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
        formStatus.textContent = "Your prayer request is opening in WhatsApp.";
        formStatus.style.color = "#166534";
        prayerForm.reset();
    });
}

console.log("Welcome to The Apostolic Power and Glory Ministry");