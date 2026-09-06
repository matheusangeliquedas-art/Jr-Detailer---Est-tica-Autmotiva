/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   FORMULÁRIO → WHATSAPP
===================================================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const vehicle =
        document.getElementById("vehicle").value.trim();

    const service =
        document.getElementById("service").value;


    if (!name || !vehicle) {

        alert("Por favor, preencha seu nome e veículo.");

        return;

    }


    const message =
        `Olá, JR Detailer!%0A%0A` +

        `Meu nome é ${name}.%0A` +

        `Veículo: ${vehicle}.%0A` +

        `Tenho interesse em: ${service}.%0A%0A` +

        `Gostaria de saber mais informações e disponibilidade.`;


    const whatsappNumber = "5517997485866";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =====================================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .why-card, .gallery-item, .about-content, .contact-card"
    );


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});