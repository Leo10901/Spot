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
function filterInternshipPrograms() {
    var input = document.getElementById('searchInput');
    var items = document.getElementsByClassName('program-item');
    if (!input || !items.length) return;

    var filter = input.value.trim().toLowerCase();
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].innerText.toLowerCase();
        // Show all if input is empty, else show only matching
        if (!filter || itemText.indexOf(filter) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('searchInput');
    if (input) {
        input.addEventListener('keyup', filterInternshipPrograms);
    }
});

// Typewriter text for fun //
document.addEventListener('DOMContentLoaded', function() {
  // Target the span where the text will be animated
  const target = document.getElementById('animated-hero-text');
  const text = "We Connect High School Students with Opportunities in Toronto.";
  let delay = 0;

  // Clear any previous text
  target.innerHTML = '';

  // Animate each character
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.className = 'animated-hero-char';
    span.style.animationDelay = (0.03 * i) + 's';
    target.appendChild(span);
  });
});

fetch('opportunities.json')
  .then(res => res.json())
  .then(opportunities => {
    // For main search: display all
    // For specific pages: filter by type (e.g. volunteer, internship)
    // Use JS to dynamically build and insert the results list into the page.
  });
