document.querySelectorAll(".disabled-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
    });
});