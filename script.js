// Typed.js
const typed = new Typed('#typed', {
  strings: ['Data Science Student', 'Python Developer', 'Web Developer', 'AI Assistant Builder', 'Problem Solver'],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});

// Mobile menu toggle
const burger = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('a');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    burger.classList.remove('toggle');
  });
});

// Lucide icons + footer year
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollToTopBtn.classList.add('show');
  else scrollToTopBtn.classList.remove('show');
});
scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Three.js 3D background
window.onload = function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 2000;
  const posArray = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 10;
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xf59e0b,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleMesh);

  const light = new THREE.PointLight(0xf59e0b, 3, 100);
  light.position.set(0, 0, 5);
  scene.add(light);

  const animate = () => {
    particleMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
};
