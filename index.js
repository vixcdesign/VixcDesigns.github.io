const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');

let index = 0;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function update() {

  const width =
    document.querySelector('.carousel-window').offsetWidth;

  track.style.transform =
    `translateX(-${index * width}px)`;

}

nextBtn.onclick = () => {

  index++;

  if (index >= cards.length) {
    index = 0;
  }

  update();

};

prevBtn.onclick = () => {

  index--;

  if (index < 0) {
    index = cards.length - 1;
  }

  update();

};