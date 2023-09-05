
/*=============Ativando o id da navbar conforme a pagina em destaque ======*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');
            });
        };
    });
}

/*================  Ativando icone navbar na responsividade =========*/
let menuIcon = document.querySelector('#menu-icones');
let navBar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
    /* boxicon 'x'  */
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('ativa')
};

/*====================  scroll reverse JS (animação) site ==============*/
ScrollReveal({ 
    //reset: true,   //remover para cada iteração comentando o reset  
    distance: '80px',
    duration: 2000,
    delay: 100,
});

/* EFEITOS DE MOVIMENTO DAS COISAS */
ScrollReveal().reveal('.home-conteiner', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-conteiner h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-conteiner p, .social-media', { origin: 'left' });
ScrollReveal().reveal('.sobre_titulo, .sobre_texto', { origin: 'left' });
ScrollReveal().reveal('.img-meio', { origin: 'left' });
ScrollReveal().reveal('.my_service', { origin: 'left' });
ScrollReveal().reveal('.sobre_info', { origin: 'bottom' });
ScrollReveal().reveal('.my_habilidades', { origin: 'bottom' });
ScrollReveal().reveal('.contato', { origin: 'top' });

/*================ typed JS (Bib em JS) multiplo textos =================*/
/* https://www.mundojs.com.br/2019/01/24/conheca-o-typed-js/ */
new Typed('.texto-multiplo', {
    strings: ["Software Developer!", "Bot's Developer!", "Moderator on Twitch!"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true, 
});

new Typed('.texto-rapido', {
    strings: ['Sou Vin&iacute;cius Pereira Polli','Desenvolvedor de Software'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 6000,
    loop: true, 
});

/* barra de NAVEGAÇÃO */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-67px"; // valor ajustável para definir a altura da barra de navegação
  }
  prevScrollpos = currentScrollPos;
}

/* FOTO DO MEIO - TROCA */
var banner = document.querySelector('.img-meio');
var banners = ['img/1.jpg', 'img/3.jpg'];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual++;
    if (bannerAtual == banners.length) {
        bannerAtual = 0;
    }
    
    banner.style.opacity = '0'; // Define a opacidade inicial como 0 para criar o efeito de desvanecimento
    
    setTimeout(function() {
        banner.src = banners[bannerAtual];
        banner.style.transform = 'translateX(0)'; // Move o banner para fora da tela na direção horizontal
        banner.style.opacity = '1'; // Define a opacidade para 1 para criar o efeito de desvanecimento
    }, 2000); // Tempo para trocar o banner (2 segundos)

    setTimeout(function() {
        banner.style.transform = 'translateX(0)'; // Move o banner de volta para a posição original
    }, 1100); // Tempo para iniciar o efeito de arrastar (1.1 segundos)
}
setInterval(trocaBanner, 8000);


// DOWNLOAD CV 
document.getElementById("downloadButton").addEventListener("click", function() {
    // URL do currículo
    var cvUrl = "cv/cv_vini.pdf";

    // Abre o currículo em uma nova janela e força o download
    window.open(cvUrl, "_blank").focus();
});


//ROTAÇÃO DO PORTIFOLIO
var item = document.getElementById("portifolio");

item.addEventListener("mouseover", function() {
    item.classList.add("rotacionado");
});
  
item.addEventListener("mouseout", function() {
    item.classList.remove("rotacionado");
});
