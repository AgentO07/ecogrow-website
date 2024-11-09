document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            // Only prevent default if the link is an internal anchor link
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Contact form submission handler
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + ". Your message has been sent!");
            contactForm.reset();
        } else {
            alert("Please fill in all fields before submitting the form.");
        }
    });

    // Product hover effect for accessibility
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                product.classList.toggle("active");
            }
        });
    });
});
