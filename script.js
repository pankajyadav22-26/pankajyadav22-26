// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle
  const menuBtn = document.querySelector('#menu');
  const navbar = document.querySelector('.navbar');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('active');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTop = document.querySelector('#scroll-top');
    
    header.classList.toggle('scrolled', window.scrollY > 100);
    scrollTop.classList.toggle('active', window.scrollY > 500);
  });
  
  // Scroll to top
  document.querySelector('#scroll-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Typed.js effect
  const typed = new Typed('.typing-text', {
    strings: ["Frontend Development", "Backend Development", "Web designing", "App development", "Machine learning"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
  
  // Initialize Vanilla Tilt
  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 8,
    speed: 300,
    glare: true,
    "max-glare": 0.2,
  });
  
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    delay: 200,
    reset: true
  });
  
  sr.reveal('.home .text-content, .home .image', { origin: 'left' });
  sr.reveal('.about .image, .about .content', { interval: 200 });
  sr.reveal('.skills .container, .education .box-container, .project .box-container', { delay: 400 });
  sr.reveal('.por .por-content, .por .timeline', { interval: 200 });
  sr.reveal('.contact .container', { origin: 'bottom' });
  
  // Skills data
  const skills = [
    {
        "name": "C",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/48px-C_Programming_Language.svg.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "Redux",
        "icon": "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
        {
        "name": "React Native",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    }
];
  
  // Render skills
  const skillsContainer = document.getElementById('skillsContainer');
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'bar';
    skillElement.innerHTML = `
      <div class="info">
        <img src = ${skill.icon}> </img>
        <span>${skill.name}</span>
      </div>
    `;
    skillsContainer.appendChild(skillElement);
  });
  
  // Projects data
  const projects = 
  [
  {
    "name": "ParkEase Haven",
    "desc": "Developed a smart parking system enabling automated gate control with real-time vehicle detection and 99.9% acknowledgment reliability.",
    "image": "parkease",
    "links": {
      "view": "https://drive.google.com/file/d/1BYU3OtgNQ352-uq6fIZung-4nnhtiFNr/view?usp=sharing",
      "code": "https://github.com/pankajyadav22-26/parkEase_Haven"
    }
  },
  {
    "name": "Bound by Books",
    "desc": "Bookstore website with user authentication, a responsive frontend showcasing recent and all books, and a robust user profile with favourites, orders, cart management, and address updates.Admin functionalities for adding and deleting books, managing orders, and updating order status",
    "image": "boundbybooks",
    "links": {
      "view": "https://boundbybooks29.netlify.app",
      "code": "https://github.com/pankajyadav22-26/Bound-by-Books"
    }
  },
  {
    "name": "Crop Companion",
    "desc": "An AI-powered crop cycle management system for farmers, integrating 8+ agricultural stages (sowing, irrigation, pest control, harvesting, yield) with dynamic UI",
    "image": "cropcompanion",
    "links": {
      "view": "https://cropcompanion-dnb9.onrender.com",
      "code": "https://github.com/pankajyadav22-26/CropCompanion"
    }
  },
  {
    "name": "NITD Placement Ops",
    "desc": "NITD Placement Ops is a role-based placement portal designed for NIT Delhi to streamline campus recruitment. It supports secure authentication, password reset. Built with Next.js and Node.js, the platform offers a responsive, user-friendly interface with dark mode support.",
    "image": "nitdplacementops",
    "links": {
      "view": "https://nitdplacementops.vercel.app",
      "code": "https://github.com/pankajyadav22-26/nitd_placement_ops"
    }
  },
  {
    "name": "Speedy Feast",
    "desc": "A responsive food delivery website featuring user login, signup, add-to-cart functionality, and a Stripe payment gateway. The site offers various food categories for customers. Additionally, I created a password-protected admin panel for managing food items, viewing all orders, and adding new products.",
    "image": "speedyfeast",
    "links": {
      "view": "https://foodwebsite-frontend.onrender.com",
      "code": "https://github.com/pankajyadav22-26/SpeedyFeast"
    }
  }
]

  
  // Render projects
  const projectsContainer = document.querySelector('.project .box-container');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'box tilt';
    projectElement.innerHTML = `
      <img draggable="false" src="assets/images/projects/${project.image}.png" alt="${project.name}">
      <div class="content">
        <div class="tag">
          <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i>View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    `;
    projectsContainer.appendChild(projectElement);
  });
  
  // Initialize Tilt for new project elements
  VanillaTilt.init(document.querySelectorAll('.project .tilt'), {
    max: 5,
    speed: 300,
    glare: true,
    "max-glare": 0.1,
  });
  
  // EmailJS contact form
  emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('contact_service', 'template_contact', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      });
  });
});