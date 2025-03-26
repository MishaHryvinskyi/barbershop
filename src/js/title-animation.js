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

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    let increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start >= target) {
            element.firstChild.textContent = target;
        } else {
            element.firstChild.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
    }
    
    updateCounter();
}

function onScrollTriggerCounter() {
    const counterElements = document.querySelectorAll(".counter-js");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNumber = parseInt(entry.target.textContent, 10);
                animateCounter(entry.target, targetNumber);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counterElements.forEach(element => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", onScrollTriggerCounter);