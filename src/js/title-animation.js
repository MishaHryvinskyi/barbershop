const titles = document.querySelectorAll("h2.title");

export function checkVisibility() {
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75) {
            title.classList.add("active-title");
        } else {
            title.classList.remove("active-title");
        }
    });
}