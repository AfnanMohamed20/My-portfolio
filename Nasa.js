const projects = [
  {
    title: "7erfa Website",
    description: "Arabic platform connecting craftspeople with learners, with a responsive RTL interface.",
    image: "7erfa'sphoto.jpeg",
    link: "https://7erfa.vercel.app/",
    github: "https://github.com/AfnanMohamed20/7erfa.git" 
  },
  {
    title: "Walmart Retail Dashboard",
    description: "Interactive analytics dashboard for sales, categories, and promotions.",
    image: "retail.jpeg",
    link: "https://github.com/AfnanMohamed20/pipline",
    github: "https://github.com/AfnanMohamed20/pipline"
  },
  {
    title: "Microgravity Combustion Dashboard",
    description: "AI-powered dashboard for NASA combustion research, built with Next.js, TypeScript, and Tailwind CSS.",
    image: "NasaD.jpeg",
    link: "https://github.com/menna-walid24/flame-in-freefall",
    github: "https://github.com/menna-walid24/flame-in-freefall"
  },
  {
    title: "My Portfolio",
    description: "Responsive portfolio with an interactive project carousel, built from scratch.",
    image: "myportfolio.jpeg",
    link: "https://my-portfolio-one-sandy-79.vercel.app",
    github: "https://github.com/AfnanMohamed20/My-portfolio.git"
  }
];
// ده بيدور على ال DIV اللى عملتها فى html اللى الكلاس بتاعها اسمه cards
// querySelector بيدور على اول عنصر فى الصفحه تكون الكلاس بتاعته اسمها cards
const cardsContainer = document.querySelector(".cards"); 

projects.forEach(project => {

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML =
   `
    <img src="${project.image}" alt="${project.title}">
    <h4>${project.title}</h4>
    <p>${project.description}</p>
        <div class="card-actions">
      <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener" class="github-icon" aria-label="GitHub repository">
          <i class="fa-brands fa-github"></i>
        </a>` : ""}
    </div>
  `;
  // حطلى الكارت ده فى الديف بتاعت الكروت كلها
    cardsContainer.appendChild(card);

});


const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

function getScrollAmount() {
  const card = cardsContainer.querySelector(".card");
  const gap = parseInt(getComputedStyle(cardsContainer).gap) || 0;
  const cardWidth = card.offsetWidth + gap;
  return window.innerWidth <= 768 ? cardWidth * 2 : cardWidth;
}

next.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

prev.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});