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

function searchPrograms() {
    // Get the input value and convert to lowercase for case-insensitive search
    var input = document.getElementById('searchInput').value.toLowerCase();
    // Get all program items
    var items = document.getElementsByClassName('program-item');
    // Loop through all items, and hide those that don't match the query
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].innerText.toLowerCase();
        if (itemText.indexOf(input) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}
