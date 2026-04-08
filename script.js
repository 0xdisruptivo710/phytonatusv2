// ============================================================
// PHYTONATUS — script.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Header scroll behavior ─────────────────────────────
    const header = document.getElementById('header');
    function updateHeader() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    // ── Hero bg parallax / load ────────────────────────────
    // (reservado para vídeo scroll-controlled futuro)

    // ── Mobile hamburger menu ──────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });
        // close on link click
        mobileNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
            });
        });
    }

    // ── Smooth scroll for anchor links ────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ── Contato: CTA "Falar com Comercial" prefills select ─
    const ctaComercial = document.getElementById('cta-comercial');
    const destSelect = document.getElementById('dest-select');
    if (ctaComercial && destSelect) {
        ctaComercial.addEventListener('click', e => {
            e.preventDefault();
            destSelect.value = 'comercial';
            const contato = document.getElementById('contato');
            if (contato) {
                const top = contato.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }

    // ── Intersection Observer: fade-up animations ─────────
    const fadeCandidates = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // stagger delay via data-delay attribute
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, Number(delay));
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        fadeCandidates.forEach(el => io.observe(el));
    } else {
        fadeCandidates.forEach(el => el.classList.add('visible'));
    }

    // ── Contact form: prevent default / show feedback ─────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            btn.textContent = 'Mensagem enviada!';
            btn.style.background = '#4A6741';
            setTimeout(() => {
                btn.textContent = 'Enviar mensagem';
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ── File attachment label ──────────────────────────────
    const fileInput = document.getElementById('attach');
    const fileLabel = document.getElementById('attach-label');
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', () => {
            const name = fileInput.files[0]?.name;
            fileLabel.textContent = name ? `📎 ${name}` : 'Anexar arquivo (PDF, imagem, DOC)';
        });
    }

});
