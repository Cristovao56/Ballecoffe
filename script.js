document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const heroObserver = new IntersectionObserver((entries) => handleIntersection(entries, heroObserver), observerOptions);
    const receitasObserver = new IntersectionObserver((entries) => handleIntersection(entries, receitasObserver), observerOptions);

    const hero = document.querySelector('.hero');
    const receitas = document.querySelector('.receitas');

    heroObserver.observe(hero);
    receitasObserver.observe(receitas);
});
