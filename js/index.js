// Inizializzo l'indice delle slide

let slideIndex = 1;
showSlides(slideIndex);

// Controlli per i pulsanti cambio slide

function plusSlides(n) {

  showSlides(slideIndex += n);
}

// Controlli immagini thumbnail 

function currentSlide(n) {

  showSlides(slideIndex = n);

}

function showSlides(n) {

  // acquisico gli elementi my-slide e dot

  let slides = document.getElementsByClassName("my-slide");

  // Controllo se mi trovo alla prima o ultima slide e modifico l'index per permettere il ciclo delle immagini

  if (n > slides.length) {

    slideIndex = 1;
    
  }

  if (n < 1) {

    slideIndex = slides.length;

  }

  // Modifico la modalita di display delle slide

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }


  slides[slideIndex-1].style.display = "block";
  
}