```javascript
// =========================
// Typing Effect
// =========================

const typingText = document.getElementById("typingText");

if (typingText) {

    const text =
        "BSc IT Student | Web Developer | Python Learner";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingText.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 100);

        }

    }

    typeWriter();

}

// =========================
// Contact Form Validation
// =========================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document
                .getElementById("name")
                .value
                .trim();

            const email =
                document
                .getElementById("email")
                .value
                .trim();

            const message =
                document
                .getElementById("message")
                .value
                .trim();

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }

            alert(
                "Thank you! Your message has been sent successfully."
            );

            contactForm.reset();

        }
    );

}

// =========================
// Scroll Animation
// =========================

const cards =
    document.querySelectorAll(
        ".card, .skill-box, .project-card"
    );

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0px)";

                    }

                }
            );

        },

        {
            threshold: 0.1
        }

    );

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.6s ease";

    observer.observe(card);

});

// =========================
// Dynamic Footer Year
// =========================

const footerText =
    document.querySelector("footer p");

if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Siddharth Ambat. All Rights Reserved.`;

}

// =========================
// Console Welcome Message
// =========================

console.log(
    "Welcome to Siddharth's Portfolio Website 🚀"
);
```
