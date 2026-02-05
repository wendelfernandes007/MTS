document.getElementById('form-oxitec').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado! A equipe Oxitec entrará em contato em breve.');
    this.reset();
    
});



// Efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

