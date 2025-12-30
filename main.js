// Projects data
const projects = [
  {
    title:"Weather App",
    desc:"A responsive app that shows 7-day forecasts using OpenWeather API.",
    tech:["JS","API","CSS"],
    img:"assets/img/project-1.jpg",
    live:"https://your-demo-link.netlify.app",
    repo:"https://github.com/yourname/weather-app"
  },
  {
    title:"Task Manager",
    desc:"Full-stack todo list built with Node/Express and MongoDB.",
    tech:["Node","MongoDB","EJS"],
    img:"assets/img/project-2.jpg",
    live:"#",
    repo:"https://github.com/yourname/task-manager"
  },
  // add more objects here
];

// Inject cards
const grid = document.getElementById('projectGrid');
grid.innerHTML = projects.map(p=>`
  <div class="card">
    <img src="${p.img}" alt="${p.title}">
    <div class="card-content">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech">
        ${p.tech.map(t=>`<span>${t}</span>`).join('')}
      </div>
      <div style="margin-top:1rem">
        <a href="${p.live}" target="_blank" class="btn btn-sm">Live Demo</a>
        <a href="${p.repo}" target="_blank" class="btn btn-outline btn-sm">Code</a>
      </div>
    </div>
  </div>`).join('');

// Scroll reveal
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>e.isIntersecting && e.target.classList.add('visible'));
},{threshold:.3});
sections.forEach(s=>observer.observe(s));

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
