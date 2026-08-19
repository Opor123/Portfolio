const nav = document.querySelector('nav');
const scrollProgress = document.querySelector('.scroll-progress');
const cursorGlow = document.querySelector('.cursor-glow');
const revealItems = document.querySelectorAll('.reveal');

revealItems.forEach((item) => {
  const parent = item.parentElement;
  const siblings = parent
    ? Array.from(parent.children).filter((child) => child.classList.contains('reveal'))
    : [];
  const staggerIndex = siblings.indexOf(item);
  if (staggerIndex > 0) {
    item.style.transitionDelay = `${Math.min(staggerIndex, 6) * 90}ms`;
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetSelector = anchor.getAttribute('href');
    if (!targetSelector || targetSelector === '#') {
      return;
    }

    const target = document.querySelector(targetSelector);
    if (!target) {
      return;
    }

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 20);

  if (scrollProgress) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    scrollProgress.style.transform = `scaleX(${progress / 100})`;
  }
});

const rotatingWords = document.querySelectorAll('.rotating-word');
if (rotatingWords.length) {
  let wordIndex = 0;
  setInterval(() => {
    rotatingWords.forEach((word, index) => {
      word.classList.toggle('is-visible', index === wordIndex);
    });
    wordIndex = (wordIndex + 1) % rotatingWords.length;
  }, 2600);
}

if (cursorGlow) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const counterElements = document.querySelectorAll('[data-counter]');

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-count-to') || '0');
  const suffix = element.getAttribute('data-suffix') || '';

  if (prefersReducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (counterElements.length) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counterElements.forEach((element) => counterObserver.observe(element));
}

document.querySelectorAll('[data-magnetic]').forEach((card) => {
  if (card.classList.contains('flip-card')) return;
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = (0.5 - (y / rect.height)) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

document.querySelectorAll('[data-project-card]').forEach((card) => {
  const toggleCard = (event) => {
    if (event.target.closest('a')) return;
    card.classList.toggle('is-flipped');
  };

  card.addEventListener('click', toggleCard);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(event);
    }
  });
});

const githubMeta = document.querySelector('[data-github-meta]');
const githubRepos = document.querySelector('[data-github-repos]');

async function loadGitHubData() {
  if (!githubMeta || !githubRepos) {
    return;
  }

  const fallback = `
    <div class="github-stat"><span>Repositories</span><strong>12</strong></div>
    <div class="github-stat"><span>Followers</span><strong>48</strong></div>
    <div class="github-stat"><span>Following</span><strong>12</strong></div>
  `;

  const fallbackRepos = [
    { name: 'POPP-UP', updated_at: '2026-01-12T00:00:00Z' },
    { name: 'Transformer', updated_at: '2025-12-30T00:00:00Z' },
    { name: 'Adaptive-AI-for-Pipeline-Counting', updated_at: '2025-10-24T00:00:00Z' }
  ];

  try {
    const [userResponse, repoResponse] = await Promise.all([
      fetch('https://api.github.com/users/Opor123'),
      fetch('https://api.github.com/users/Opor123/repos?per_page=6')
    ]);

    if (!userResponse.ok || !repoResponse.ok) {
      throw new Error('GitHub API request failed');
    }

    const user = await userResponse.json();
    const repos = await repoResponse.json();
    const publicRepos = typeof user.public_repos === 'number' ? user.public_repos : 0;
    const followers = typeof user.followers === 'number' ? user.followers : 0;
    const following = typeof user.following === 'number' ? user.following : 0;

    githubMeta.innerHTML = `
      <div class="github-stat"><span>Repositories</span><strong>${publicRepos}</strong></div>
      <div class="github-stat"><span>Followers</span><strong>${followers}</strong></div>
      <div class="github-stat"><span>Following</span><strong>${following}</strong></div>
    `;

    const latest = Array.isArray(repos)
      ? repos.filter((repo) => !repo.fork).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 3)
      : fallbackRepos;

    githubRepos.innerHTML = latest
      .map((repo) => {
        const date = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently updated';
        const url = repo.html_url || 'https://github.com/Opor123';
        return `
          <li>
            <a href="${url}" target="_blank" rel="noreferrer">${repo.name}</a>
            <span class="repo-date">${date}</span>
          </li>
        `;
      })
      .join('');
  } catch (error) {
    githubMeta.innerHTML = fallback;
    githubRepos.innerHTML = fallbackRepos
      .map((repo) => {
        const date = new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        return `
          <li>
            <a href="https://github.com/Opor123" target="_blank" rel="noreferrer">${repo.name}</a>
            <span class="repo-date">${date}</span>
          </li>
        `;
      })
      .join('');
  }
}

loadGitHubData();

const modal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.certificate-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !modalImage || !modalTitle) return;
    const image = button.getAttribute('data-image');
    const title = button.getAttribute('data-title');

    modalImage.src = image || '';
    modalTitle.textContent = title || 'Certificate';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-close-modal], .modal-close').forEach((element) => {
  element.addEventListener('click', closeModal);
});

const printResumeBtn = document.getElementById('print-resume');
if (printResumeBtn) {
  printResumeBtn.addEventListener('click', () => window.print());
}

const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.getAttribute('data-copy-email');
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard');
    } catch (error) {
      showToast(`Copy failed — email is ${email}`);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal) {
    closeModal();
  }
});

const easterEgg = document.getElementById('easter-egg');
const secretCode = 'sudo';
let keyBuffer = '';

document.addEventListener('keydown', (event) => {
  if (!easterEgg || event.key.length > 1) return;

  keyBuffer = (keyBuffer + event.key).slice(-secretCode.length).toLowerCase();

  if (keyBuffer === secretCode) {
    easterEgg.classList.add('is-visible');
    easterEgg.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      easterEgg.classList.remove('is-visible');
      easterEgg.setAttribute('aria-hidden', 'true');
    }, 2600);
  }
});
