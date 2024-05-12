document.addEventListener("DOMContentLoaded", function() {
    var brandLogo = document.querySelector('h1 img');
    var brandConcept = document.getElementById('brandConcept');

    brandLogo.addEventListener('mouseover', function() {
        brandConcept.style.display = 'block';
    });

    brandLogo.addEventListener('mouseout', function() {
        brandConcept.style.display = 'none';
    });
});
