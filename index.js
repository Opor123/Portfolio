document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

document.querySelectorAll('.card, .contact-card, .certificate-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

const nav=document.querySelector('nav');
window.addEventListener("scroll",()=>{
    return window.scrollY>50?nav.classList.add("scrolled"):nav.classList.remove("scrolled");
});

document.querySelectorAll('.flip-card').forEach(card=>{
    card.addEventListener("click",()=>{
        card.classList.toggle("flipped");
    });

    card.setAttribute('tabindex','0');
    card.addEventListener("keydown",e=>{
        if(e.key==="Enter"||e.key===" "){
            e.preventDefault();
            card.classList.toggle("flipped");
        }
    });
});