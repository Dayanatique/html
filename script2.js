const card = document.getElementById('card');
let isFlipped = false;

setInterval(() => {
  if (isFlipped) {
    card.style.transform = 'rotateY(0deg)';
  } else {
    card.style.transform = 'rotateY(180deg)';
  }
  isFlipped = !isFlipped;
}, 2000); // Cambia el intervalo (2000 ms = 2 segundos) según sea necesario
