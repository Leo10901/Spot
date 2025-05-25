// Scroll event for nav color – KEEP THIS
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-links');
    const heroSection = document.querySelector('.hero-section');
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight - 100) {
        // Past hero section - change to black
        nav.querySelectorAll('a').forEach(link => {
            link.style.color = 'black';
        });
    } else {
        // On hero section - keep white
        nav.querySelectorAll('a').forEach(link => {
            link.style.color = 'white';
        });
    }
});

// Typewriter text for fun – KEEP THIS UNDO the side dashes  if the other code doesnt work 
// document.addEventListener('DOMContentLoaded', function() {
  // Target the span where the text will be animated
//  const target = document.getElementById('animated-hero-text');
//  const text = "We Connect High School Students with Opportunities in Toronto.";
 // let delay = 0;

  // Clear any previous text
  if (target) target.innerHTML = '';

  // Animate each character
 // if (target) {
   // text.split('').forEach((char, i) => {
     // const span = document.createElement('span');
    //  span.textContent = char;
     // span.className = 'animated-hero-char';
    //  span.style.animationDelay = (0.03 * i) + 's';
     // target.appendChild(span);
    });
  }
});


const element = document.getElementById('animatedText');
const text = element.textContent;
element.textContent = '';

[...text].forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animationDelay = `${1050 + index * 5}ms`;
  element.appendChild(span);
});








resultsDiv.innerHTML = `
  <div class="spot-program-list">
  ${results.map(opp => `
    <div class="spot-program-item">
      <h2>${opp.title}</h2>
      <p>${opp.description || ""}</p>
      <small>${opp.type ? ('Type: ' + opp.type.charAt(0).toUpperCase() + opp.type.slice(1)) : ''}${opp.deadline ? ' | Deadline: ' + opp.deadline : ''}</small>
      <a href="${opp.link}" target="_blank">Apply Here</a>
    </div>
  `).join('')}
  </div>
`;
