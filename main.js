// Events Section
let days = document.querySelector("[data-days]");
let hours = document.querySelector("[data-hours]");
let min = document.querySelector("[data-minutes]");
let sec = document.querySelector("[data-seconds]");

let countDown = new Date("2023-12-31").getTime();

let counter = setInterval(() => {
  let dateNow = Date.now();
  dateDiff = countDown - dateNow;
  let day = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let hour = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.trunc((dateDiff % (1000 * 60)) / 1000);
  days.innerHTML = day;
  hours.innerHTML = hour;
  min.innerHTML = minute;
  sec.innerHTML = second;
  if (dateDiff === 0) {
    clearInterval(counter);
  }
}, 1000);

// Skills Section
let spans = document.querySelectorAll(
  ".our-skills .container .skill .data > span"
);
let skillsSection = document.querySelector(".our-skills");
let started = false;
window.onscroll = () => {
  if (window.scrollY >= skillsSection.offsetTop) {
    // Skills Animation Bar
    spans.forEach((span1) => {
      let width = span1.dataset.progress;
      span1.style.width = width;
    });
  }
  // Status Number Increase
  if (window.scrollY >= statusSection.offsetTop) {
    if (!started) {
      spanList.forEach((span2) => {
        startCount(span2);
      });
    }
    started = true;
  }
};

// Status Section

let spanList = document.querySelectorAll(".stats .container .box > span ");
let statusSection = document.querySelector(".stats");

function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
