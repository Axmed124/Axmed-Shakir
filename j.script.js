document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#gallery img");

    images.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            const link = img.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
