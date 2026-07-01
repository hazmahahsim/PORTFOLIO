AOS.init({

duration:1200,

once:true

});

new Typed(".typing",{

strings:[

"Frontend Developer",

"JavaScript Developer",

"Web Designer",

"UI Developer"

],

typeSpeed:80,

backSpeed:50,

loop:true

});

VanillaTilt.init(document.querySelector(".profile-card"),{

max:20,

speed:400,

glare:true,

"max-glare":0.4

});
gsap.from(".hero-text h1",{

y:100,

opacity:0,

duration:1.2

});

gsap.from(".hero-text h2",{

y:60,

opacity:0,

delay:.3,

duration:1

});

gsap.from(".hero-text p",{

opacity:0,

delay:.6,

duration:1

});

gsap.from(".profile-card",{

x:150,

opacity:0,

duration:1.5

});
// cursor
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
VanillaTilt.init(document.querySelectorAll(".project-card"),{

max:12,

speed:400,

glare:true,

"max-glare":0.3

});
//================ COUNTER =================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/150;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,15);

}else{

counter.innerText=target;

}

}

updateCounter();

});
//================ TOP BUTTON =================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
//================ SCROLL PROGRESS =================

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

progressBar.style.width=progress+"%";

});
const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

};





const buttons=document.querySelectorAll(".btn-main");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const x=e.offsetX;

const y=e.offsetY;

btn.style.setProperty("--x",x+"px");

btn.style.setProperty("--y",y+"px");

});

});

// ================= FEATURED GITHUB PROJECTS =================

const username = "hazmahahsim";

// fetch(`https://api.github.com/users/${username}/repos`)
// .then(response => response.json())
// .then(repos => {

//     // Latest updated repos pehle
//     repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // Sirf 4 repos
//     const featuredRepos = repos.slice(0, 4);

//     const container = document.getElementById("featured-projects");

//     featuredRepos.forEach(repo => {

//         container.innerHTML += `

//         <div class="col-lg-6 col-md-6">

//             <div class="project-card">

//                 <div class="project-content">

//                     <h3>${repo.name}</h3>

//                     <p>${repo.description || "No description available."}</p>

//                     <div class="tech">

//                         <span>${repo.language || "HTML"}</span>

//                     </div>

//                     <div class="project-btns">

//                         <a href="${repo.html_url}"
//                         target="_blank"
//                         class="github-btn">

//                         <i class="fab fa-github"></i>

//                         GitHub

//                         </a>

//                     </div>

//                 </div>

//             </div>

//         </div>

//         `;

//     });

// })
fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(repos=>{

    repos.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));

    const featured = repos.slice(0,4);

    const container=document.getElementById("featured-projects");

    featured.forEach(repo=>{

        const info = projectData[repo.name] || {

            image:"images/default.jpg",

            description:repo.description || "No Description",

            live:"#",

            tech:["HTML"]

        };

        container.innerHTML += `

        <div class="col-lg-6">

        <div class="project-card">

        <img src="${info.image}" class="img-fluid">

        <div class="project-content">

        <h3>${repo.name}</h3>

        <p>${info.description}</p>

        <div class="tech">

        ${info.tech.map(t=>`<span>${t}</span>`).join("")}

        </div>

        <div class="project-btns">

        <a href="${repo.html_url}"

        target="_blank"

        class="github-btn">

        <i class="fab fa-github"></i>

        GitHub

        </a>

        <a href="${info.live}"

        target="_blank"

        class="live-btn">

        Live Demo

        </a>

        </div>

        </div>

        </div>

        </div>

        `;

    });

});
