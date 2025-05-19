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
