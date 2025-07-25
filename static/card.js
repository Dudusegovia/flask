// ===== Fundo dinâmico com easing (lerp) =====
// Inspirado no “CSS Spotlight Effect” (Frontend Masters) usando CSS vars. :contentReference[oaicite:1]{index=1}

const root = document.documentElement;
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let mx = targetX;
let my = targetY;
const ease = 0.12; // suavidade do movimento

function onMove(e) {
  targetX = e.clientX;
  targetY = e.clientY;
}

function raf() {
  // LERP (linear interpolation)
  mx += (targetX - mx) * ease;
  my += (targetY - my) * ease;

  root.style.setProperty('--mx', `${mx}px`);
  root.style.setProperty('--my', `${my}px`);

  requestAnimationFrame(raf);
}

document.addEventListener('pointermove', onMove);
raf();

// ===== Botão de contato =====
document.getElementById('contactBtn').addEventListener('click', () => {
  alert('Obrigado por querer entrar em contato com Eduardo! 😉');
});
