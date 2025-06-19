document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para dispositivos móviles
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener valores del formulario
            const empresa = document.getElementById('empresa').value.trim();
            const ruc = document.getElementById('ruc').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const correo = document.getElementById('correo').value.trim();
            
            // Validación básica
            let isValid = true;
            let errorMessage = '';
            
            if (empresa === '') {
                isValid = false;
                errorMessage += 'Por favor, ingrese el nombre de la empresa.\n';
            }
            
            if (ruc === '') {
                isValid = false;
                errorMessage += 'Por favor, ingrese el RUC.\n';
            } else if (!/^\d{11}$/.test(ruc)) {
                isValid = false;
                errorMessage += 'El RUC debe contener 11 dígitos.\n';
            }
            
            if (telefono === '') {
                isValid = false;
                errorMessage += 'Por favor, ingrese un número de teléfono.\n';
            } else if (!/^\d{9}$/.test(telefono)) {
                isValid = false;
                errorMessage += 'El teléfono debe contener 9 dígitos.\n';
            }
            
            if (correo === '') {
                isValid = false;
                errorMessage += 'Por favor, ingrese un correo electrónico.\n';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
                isValid = false;
                errorMessage += 'Por favor, ingrese un correo electrónico válido.\n';
            }
            
            if (isValid) {
                // Aquí se podría enviar el formulario a un servidor
                alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            } else {
                alert(errorMessage);
            }
        });
    }
    
    // Efecto de scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para el navbar fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cambiar estilo del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});