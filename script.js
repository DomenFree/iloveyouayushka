const heartBtn = document.getElementById('open-heart');
const heartsContainer = document.getElementById('hearts-container');
// const music = document.getElementById('bg-music');

heartBtn.addEventListener('click', () => {
  // music.play().catch(() => {}); // раскомменти, если добавишь музыку

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }
});

// CSS для сердечек добавим прямо в HTML через <style> или в style.css:
const style = document.createElement('style');
style.textContent = `
  .heart {
    position: absolute;
    top: -10vh;
    pointer-events: none;
    animation: fall linear forwards;
    z-index: 1;
  }

  @keyframes fall {
    to {
      transform: translateY(110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
