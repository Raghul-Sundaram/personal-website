var btn=document.getElementById('mode');
btn.addEventListener('click',modechange)

function modechange(){
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('button').classList.toggle('dark-btn');
    document.querySelector('nav').classList.toggle('dark-nav');
    document.querySelector('.moon').style.display='block';
    document.querySelector('.sun').style.display='none'; 
}



window.addEventListener('load',() => {
    document.querySelector('.left').classList.add('left-animate');
    document.querySelector('.right').classList.add('right-animate');
})
const square1 = document.querySelector('.inner1');
square1.classList.remove('progress1');
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square1.classList.add('progress1');
      return;
    }

    square1.classList.remove('progress1');
  });
});

observer1.observe(document.querySelector('.level'));

const square2 = document.querySelector('.inner2');
square2.classList.remove('progress2');
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square2.classList.add('progress2');
      return;
    }

    square2.classList.remove('progress2');
  });
});

observer2.observe(document.querySelector('.level'));

const square3 = document.querySelector('.inner3');
square3.classList.remove('progress3');
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square3.classList.add('progress3');
      return;
    }

    square3.classList.remove('progress3');
  });
});

observer3.observe(document.querySelector('.level'));
