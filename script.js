let observer = new IntersectionObserver(
  (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("transition");
      } else {
        entry.target.classList.remove("transition");
      }
    }
  },
  { threshold: 0.4 }
);

const container = document.getElementById("container");
const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2");
const article3 = document.getElementById("article3");
const arts = document.getElementById("arts");
container.classList.add("puff-in-center");
article1.classList.add("puff-in-center");
article2.classList.add("puff-in-center");
article3.classList.add("puff-in-center");
arts.classList.add("puff-in-center");
observer.observe(container);
observer.observe(article1);
observer.observe(article2);
observer.observe(article3);
observer.observe(arts);




     
  
  

let videoObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.currentTime = 0;
          entry.target.play()
        } else {
          entry.target.pause()
        }
      }
    },
    { threshold: 0.2 }
  );

  const vid1 = document.getElementById("vid1");
  videoObserver.observe(vid1);
  


  function getPics() {} 
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});




