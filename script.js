const body = document.getElementById('main');
const cursor = document.getElementById('cursor');
const blades = document.querySelectorAll('.blade');
const buttons = document.getElementsByTagName('button');

let heatActive = false;

const background = document.getElementById('background');

  // Function to create and add a particle
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize position
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;

    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = 70;
    particle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    background.appendChild(particle);
  }

  // Create 30 particles
  for (let i = 0; i < 100; i++) {
    createParticle();
  }

gsap.utils.toArray('.particle').forEach((particle) => {
    gsap.to(particle, {
      duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
      y: -20 + Math.random() * 20,     // Random float range
      opacity: 0.4 + Math.random() * 0.6, // Random opacity range
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 0.3,
        from: "random"
      }
    });
  });

  // Create subtle orbit animations for each planet
gsap.to(".saturn", {
    duration: 20,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    y: "+=15", // Slight vertical movement
    rotation: 10 // A gentle rotation for realism
  });
  
  gsap.to(".uranus", {
    duration: 25,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    x: "-=20", // Slight horizontal movement
    rotation: -15 // Rotation in the opposite direction
  });
  
  gsap.to(".jupiter", {
    duration: 30,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    y: "+=20",
    x: "+=10", // Diagonal movement
    rotation: 5
  });

// Set up a single timeline for cursor and blade animations
let heatTimeline = gsap.timeline({ paused: true });

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;


body.addEventListener('mousemove', (event) => {

    // Calculate mouse position relative to center
  const mouseX = (event.clientX / viewportWidth) - 0.5;
  const mouseY = (event.clientY / viewportHeight) - 0.5;
  const offsetX = (event.clientX / viewportWidth - 0.5) * 15;
  const offsetY = (event.clientY / viewportHeight - 0.5) * 15;

    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        ease: 'back.out',
    });

    // Continuous blade rotation
    gsap.to(blades, {
        rotate: '+=360',
        duration: 1.5,
        repeat: -1,
        ease: 'none',
        modifiers: {
            rotate: (value) => `${value % 360}deg`,
        },
    });
    // Move particles based on mouse position
  gsap.utils.toArray('.particle').forEach((particle) => {
    gsap.to(particle, {
      x: mouseX * 15, // Move particles horizontally
      y: mouseY * 15, // Move particles vertically
      duration: 0.3,  // Smooth out movement
      ease: 'power2.out'
    });
  });
  gsap.to(".saturn", { x: offsetX, y: offsetY, duration: 1 });
    gsap.to(".uranus", { x: -offsetX, y: -offsetY, duration: 1 });
    gsap.to(".jupiter", { x: offsetX * 0.5, y: offsetY * 0.5, duration: 1 });
});

gsap.to(cursor, {
    border: '1px solid skyblue',
    boxShadow: '0 0 5px skyblue',
    backgroundColor: '#1f1f1f',
})

gsap.to(blades, {
    backgroundColor: '#808080',
})

// Initialize heat effect timeline
heatTimeline.to(blades, {
    rotate: '+=360',
    duration: 0.3,
    ease: 'power3.out',
    backgroundColor: '#ff4500',
    modifiers: {
        rotate: (value) => `${value % 360}deg`,
    },
})
.to(blades, {
    duration: 0.5,
    backgroundColor: '#ff3000',
}, 0)
.to(blades, {
    duration: 1,
    backgroundColor: '#ff1000',
}, 0.5)
.to(cursor, {
    border: '1px solid #ff4500',
    boxShadow: '0 0 20px #ff4500',
}, 0)
.to(cursor, {
    border: '1px solid #ff3000',
    boxShadow: '0 0 20px #ff3000',
}, 0.5)
.to(cursor, {
    border: '1px solid #ff1000',
    boxShadow: '0 0 20px #ff1000',
}, 1)

// Attach event listeners to buttons
for (let button of buttons) {
    button.addEventListener('mouseenter', () => {
        // Only play if heat effect is not active
        if (!heatActive) {
            heatTimeline.play();
            heatActive = true;
        }
    });

    button.addEventListener('mouseleave', () => {
        heatTimeline.pause(0);
        heatActive = false; // Pause and reset timeline to start
        gsap.to(blades, {
            rotate: '+=360',
            duration: 1,
            ease: 'linear',
            backgroundColor: '#808080',
            modifiers: {
                rotate: (value) => `${value % 360}deg`,
            },
        });
        gsap.to(cursor, {
            border: '1px solid skyblue',
            boxShadow: '0 0 10px skyblue',
            backgroundColor: '#1f1f1f',
        });
        
    });
}


function aboutAnimate() {
    gsap.to('.fire-text', {
        y: '-20',
        duration: 1,
        opacity: 1,
        delay: 0.2,
        stagger: 0.7
    })
    
    gsap.to('#tj', {
        y: '-20',
        duration: 1,
        opacity: 1,
        delay: 1.4,
    })
    
    gsap.to('.cmb, #summary', {
        opacity: 1,
        duration: 1,
        delay: 2.2,
        stagger: 0.5
    })
    
    gsap.to('#jt, #logo', {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        stagger: 0.3
    })
    
    gsap.to('.logo, nav, .socials', {
        x: '-5',
        opacity: 1,
        duration: 1,
        delay: 0.1,
    stagger: 0.5
    })
    
    gsap.to('.dLi', {
        y: '5',
        opacity: 1,
        duration: 1,
        delay: 1.2,
        stagger: 0.3
    })

    gsap.to('.git, .link, .face', {
        opacity: 1,
        x: '-5',
        duration: 1,
        delay: 0.2,
        stagger: 0.5
    })

    const menuIcons = document.getElementById('menuIcons');
    const cross = document.getElementById('cross');
    const menu = document.querySelector('.menu');


    const tl = gsap.timeline();

    tl.to(menu, {
        right: 0,
        duration: 0.3
    })

    tl.from(cross, {
        opacity: 0,
        duration: 0.1,
    })

    tl.from('#social', {
        opacity: 0,
        duration: 0.1,
    })

    tl.from('.sLi, .mA', {
        x: 150,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2
    })

    tl.pause()

    menuIcons.addEventListener('click', () => {
        tl.play();
    })


    cross.addEventListener('click', () => {
        tl.reverse();
    })

    const socialLinks = document.querySelectorAll('.socials a');

    // link animation 

    socialLinks.forEach(social => {
        social.addEventListener('mouseenter', () => {

            gsap.to(social, {
                duration: 0.3,
                ease: 'power2.out',
                scale: 1.2,
                textShadow: '0px 0px 20px rgba(102, 118, 120, 0.8)',
            });
        });

        social.addEventListener('mouseleave', () => {

            gsap.to(social, {
                scale: 1,
                textShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
}


// section show/hide

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    // link animation 

    navLinks.forEach(link => {

        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.2,
                textShadow: '0px 0px 20px rgba(102, 118, 120, 0.8)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                textShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    


    function showSection(sectionId) {
        sections.forEach((section) => {
            section.classList.remove('active');
        });
    
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active');
    
        if (!activeSection.getAttribute('data-animated')) {
            activeSection.setAttribute('data-animated', 'true');

             // GSAP animations based on section
        switch (sectionId) {
            case 'about':
                gsap.from(activeSection, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                });
                aboutAnimate();
                break;
            case 'skills':
                gsap.from(activeSection, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                });
                animateSkills();
                break;
            case 'projects':
                gsap.from(activeSection, {
                    opacity: 0,
                    x: -100,
                    duration: 1,
                });
                projectData();
                break;
            case 'contact':
                gsap.from(activeSection, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                });
                contactAnimate();
                break;
            default:
                gsap.from(activeSection, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                });
                break;
           }
        }
       
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            showSection(targetSection);
        });
    });

    showSection('about');
});


// project 
const projectDiv = document.querySelector('.projectDiv');

// parsing project data

async function projectData() {

    try{
    const response = await fetch('./data.json');
    const data = await response.json();

    let projectHtml = '';

    for(let d of data.project) {
        
        projectHtml += `
          <div class="project flex text-c bg-light-dark ${(d.id % 2 ? 'reverse' : '')}" id=${d.id}>
  
            <div class="projectImg">
              <img id="pImage" src=${d.img} alt=${d.title} />
            </div>
            <div class="projectInfo">
              <h3 class="pT">${d.title}</h3>
              <p class="pT">${d.details}</p>
              <div class="projectLink flex">
                <a
                  class="pLink text-blue"
                  href=${d.gitLink}
                  target="_blank"
                  >GitHub Link</a
                >
                <a
                  class="pLink text-blue"
                  href=${d.previewLink}
                  target="_blank"
                  >Preview Link</a
                >
              </div>
             </div>
          </div>
        `;
    }

    projectDiv.innerHTML = projectHtml;

    gsap.to('#pImage, .projectInfo', {
        opacity: 1,
        duration: 1,
        delay: 0.3
    });

    gsap.to('.pT', {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        delay: 0.3,
        y: '-10px'
    });

    gsap.to('.pLink', {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.3
    });

    

    // Attach event listeners to dynamically created .pLink elements
    const pLinks = document.querySelectorAll('.pLink');
    pLinks.forEach(pLink => {
        pLink.addEventListener('mouseenter', () => {
            if (!heatActive) {
                heatTimeline.play();
                heatActive = true;
            }// Start the heat effect
        });

        pLink.addEventListener('mouseleave', () => {
            heatTimeline.pause(0);
            heatActive = false; // Pause and reset timeline to start
            gsap.to(blades, {
                rotate: '+=360',
                duration: 1,
                ease: 'linear',
                backgroundColor: '#808080',
                modifiers: {
                    rotate: (value) => `${value % 360}deg`,
                },
            });
            gsap.to(cursor, {
                border: '1px solid skyblue',
                boxShadow: '0 0 10px skyblue',
                backgroundColor: '#1f1f1f',
            });
        });
    });

    }catch(err) {
        console.error(err);
    }
}

projectData();


// contact

function contactAnimate() {
    const cp = document.querySelector('.cp');

    gsap.to(cp, {
        opacity: 1,
        duration: 1,
        delay: 0.2,
    })
}


// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thanks for reaching out, ${name}! I will get back to you shortly.`);
    // You can implement actual form submission logic here
});
