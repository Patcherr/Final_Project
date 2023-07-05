// Obtener referencias a los elementos HTML
const navLinks = document.querySelectorAll("nav a");
const cards = document.querySelectorAll(".card");

// Agregar el evento click a los enlaces de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Remover la clase 'active' de todos los enlaces
    navLinks.forEach((link) => link.classList.remove("active"));
    // Agregar la clase 'active' al enlace seleccionado
    link.classList.add("active");
  });
});

// Agregar el evento click a las tarjetas
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
