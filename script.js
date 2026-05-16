const chapters = document.querySelectorAll('.chapter');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 400);
      }
    });
  },
  {
    threshold: 0.4
  }
);

chapters.forEach(chapter => observer.observe(chapter));

let ambient = document.getElementById('ambient');

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  ambient.style.opacity = 0.3 + scroll / document.body.scrollHeight;
});