// Contact Page
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill out all required fields.');
    } else {
        alert('Thank you! Your message has been sent.');
    }
});

// Projects Page
function toggleDesc(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
}

// CV Page
var quote = document.getElementById('quote');
if (quote) {
    quote.addEventListener('mouseover', function() {
        quote.style.backgroundColor = '#744521';
        quote.style.color = '#ffffff';
        quote.style.fontStyle = 'italic';
    });
    quote.addEventListener('mouseout', function() {
        quote.style.backgroundColor = '';
        quote.style.color = '';
        quote.style.fontStyle = '';
    });
}

// Homepage
window.addEventListener('load', function() {
    var footer = document.querySelector('footer');
    if (footer) {
        var p = document.createElement('p');
        var date = new Date();
        var text = document.createTextNode('Page loaded on: ' + date);
        p.appendChild(text);
        footer.appendChild(p);
    }
});
