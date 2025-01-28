//Lista de Productos 
const products = [
    {
      title: "Images para refrigeradora Danza",
      categoria: "Porcelana Fria",
      image: "img/Productos/Danza.png",
      descripcion:"Imanes de mexicanos, elaborados en porcelana fria, pintados con acrilicos"},
    {
      title: "Cofre Para sobres",
      categoria: "Decoracion Fomie",
      image: "img/Productos/Cofre.png",
      descripcion:"Cofre para guardar sobres personalizado, elaborado con material fomie"},
    {
      title: "Caja Animada",
      categoria: "Decoracion Fomie",
      image: "img/Productos/Caja_animada2.png",
      descripcion:"Caja personalizada elaborado con material fomie"},
    {
     title: "Llavero",
     categoria: "Porcelana Fria",
     image: "img/Productos/llavero.png",
     descripcion:"Fachada para colgar llaves, decorada con porcelana fria"
    },
    {
     title: "Unicornio",
     categoria: "Piñata",
     image: "img/Productos/Piñata_Unicornio.png",
     descripcion:"Piñata Personalizada, para pedidos realizar con 3 dias de anticipacion"
    },
    {
     title: "Detalle Conejo",
     categoria: "Decoracion Fomie",
     image: "img/Productos/Fomi_Conejo.png",
     descripcion:"Detalle personalizado en forma de conejo, elaborado con material fomie"
    },
    {
     title: "Detalle de San Valentine Buzon",
     categoria: "Decoracion Fomie",
     image: "img/Productos/Happy_Valentine.png",
     descripcion:"Detalle personalizado para el dia del amor y la amistad, elborado con fomie"
    },
    {
     title: "Nacimiento de Jesus",
     categoria: "Porcelana Fria",
     image: "img/Productos/Jesus_Maria.png",
     descripcion:""
    },
    {
     title: "Piñata Personalizada",
     categoria: "Piñata",
     image: "img/Productos/Piñata.png",
     descripcion:"Piñata personaliza"
    },
    {
     title: "Piñata Dino",
     categoria: "Piñata",
     image: "img/Productos/Piñata_Dino.png",
     descripcion:"Piñata personalizada de Dino, de alambre, papel crepe y papelillo"
    },
    {
     title: "Corbata Baby Shower",
     categoria: "Decoracion Fomie",
     image: "img/Productos/Fomi_baby.png",
     descripcion:"Corbata para celebracion de Baby Shower"
    },
    {
     title: "TopCake para boda",
     categoria: "Porcelana Fria",
     image: "img/Productos/Porce_Novios.png",
     descripcion:"Topcake de pareja para bodas, elaborado en porcelana fria"
    },
    {
     title: "Juego para cocina",
     categoria: "Porcelana Fria",
     image: "img/Productos/Porce_Cocina.png",
     descripcion:"Cucharones e imanes decoradas en porcelana fria"
    },
    {
     title: "Decoracion con papel",
     categoria: "Decoracion",
     image: "img/Productos/Deco_Papel.png",
     descripcion:"Decoracion con papel"
    },
    {
     title: "Decoracion para cocina",
     categoria: "Decoracion",
     image: "img/Productos/Decoracion_cocina.png",
     descripcion:"Juego de cocina en madera decorado con porcelana fria, en frutas, tablero para manitas, 3 imanes y 2 cucharones"
    },
    {
     title: "Piñata Personaliza",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Caricatura5.png",
     descripcion:"Piñata personalizada"
    },
    {
     title: "Manualidad Anime",
     categoria:"Decoracion",
     image: "img/Productos/Manu_Anime.png",
     descripcion:"Diseño personalizado con fomie de anime"
    },
    {
     title: "Piñata Caricatura",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Caricatura2.png",
     descripcion:"Diseño de piñara personalizada en forma de caricatura"
    },
    {
     title: "Piñata Caricatura",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Caricatura3.png",
     descripcion:"Diseño de piñara personalizada en forma de caricatura"
    },
    {
     title: "Piñata Caricatura",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Caricatura4.png",
     descripcion:"Diseño de piñara personalizada en forma de caricatura"
    },
    {
     title: "Detalle Personalizado",
     categoria:"Tarjeta",
     image: "img/Productos/Fomi_Decoracion.png",
     descripcion:"Diseño personalizado y decorado con flores de papel"
    },
    {
     title: "Piñata de Hamburguesa",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Hamburguesa.png",
     descripcion:"Diseño de piñata personalizada en forma de hamburguesa"
    },
    {
     title: "Piñata Niña",
     categoria:"Piñata",
     image: "img/Productos/Piñata_niña.png",
     descripcion:"Diseño de piñata personalizada"
    },
    {
     title: "Piñata Peppa Pig",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Peppa.png",
     descripcion:"Diseño de piñata personalizada"
    },
    {
     title: "Sandias de Fomie",
     categoria:"Decoracion Fomie",
     image: "img/Productos/Fomi_Sandalias.png",
     descripcion:"Sandalias realizadas con fomie"
    },
    {
     title: "Bolsas de cumpleaños",
     categoria:"Decoracion Fomie",
     image: "img/Productos/Bolsas.png",
     descripcion:"Bolsas personalizadas realizadas con material fomie"
    },
    {
     title: "Caja de Bob Esponja",
     categoria:"Decoracion Fomie",
     image: "img/Productos/Caja_animada.png",
     descripcion:"Caja de bob Esponja personalizadas realizadas con material fomie"
    },
    {
     title: "Piñata Gallo",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Gallo.png",
     descripcion:"Piñata personalizada en forma de gallo"
    },
    {
     title: "Rosario",
     categoria:"Porcelana Fria",
     image: "img/Productos/Porce_Cruz5.png",
     descripcion:"Rosario personalizado realizado con porcelana fria"
    },
    {
     title: "TopCake Conejo",
     categoria:"Porcelana Fria",
     image: "img/Productos/Porce_Conejo.png",
     descripcion:"TopCake personalizado realizado con porcelana fria"
    },
    {
     title: "Piñata Frijol",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Verde.png",
     descripcion:"Piñata personalizado en forma de frijol"
    },
    {
     title: "Piñata de Gato",
     categoria:"Piñata",
     image: "img/Productos/Piñata_Gato.png",
     descripcion:"Piñata personalizado en forma de gatito."
    },
    {
     title: "Imanes de pareja Española",
     categoria:"Porcelana Fria",
     image: "img/Productos/Porce_Danza3.png",
     descripcion:"Imanes personalizados en forma de pareja con traje de España."
    },
    {
     title: "Gallo",
     categoria:"Porcelana Fria",
     image: "img/Productos/Porce_Gallo.png",
     descripcion:"Pieza de porcelana fria en forma de Gallo"
    },
    {
     title: "Tarjetas Personalizadas",
     categoria:"Tarjeta",
     image: "img/Productos/Tarjeta.png",
     descripcion:"Tarjetas personalizadas"
    }                                
];

  // Variables globales
const grid = document.getElementById("product-grid");
const pagination = document.getElementById("pagination");
const modalsContainer = document.getElementById("modals-container");
const categoryContainer = document.getElementById("categories"); // Contenedor de categorías
const productsPerPage = 8;
let currentPage = 1; // Página inicial
let currentProducts = products; // Lista de productos visible (todos al inicio)

document.addEventListener('DOMContentLoaded', function () {
  renderPaginatedProducts();
  renderPagination();
 
  const categoryLinks = document.querySelectorAll('.filter-category');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function() {
      const category = this.getAttribute('data-category')
      filterProducts(category);
    });
  });
});



// Función para renderizar los productos de una página específica
function renderPaginatedProducts() {
  //Determinar el rango de productos a mostrar
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const productsToDisplay = currentProducts.slice(start, end);

  // Vaciar el contenido previo del contenedor
  grid.innerHTML = "";
  modalsContainer.innerHTML = "";

 
  //Randerizar cada producto
  productsToDisplay.forEach((product, index) => {
    const card = `
      <div class="col s3">
        <div class="card blue-grey lighten-5">
          <div class="card-image">
            <img src="${product.image}" alt="${product.title}" class="materialboxed">
          </div>
          <div class="card-content">
            <span class="card-title">${product.title}</span>
            <p>${product.categoria}</p>
          </div>
          <!-- Botón FAB en la tarjeta -->
          <a href="#modal${index}" class="btn-floating halfway-fab waves-effect waves-light  modal-trigger">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    `;
    // Agregar la tarjeta al contenedor
    grid.innerHTML += card;

    // Crear un modal para cada producto
    const modal = `
      <div id="modal${index}" class="modal">
        <div class="modal-content">
          <h4>${product.title}</h4>
          <p><strong>Categoría:</strong> ${product.categoria}</p>
          <p><strong>Descripción:</strong> ${product.descripcion || "No disponible."}</p>
          <!-- Contenedor del rectángulo de WhatsApp -->
          <div class="whatsapp-consulta">
            <!-- Texto de referencia -->
            <span class="texto-consulta">Consulta precio aquí:</span>
  
            <!-- Botón de WhatsApp -->
            <a 
              href="https://wa.me/50431995030?text=Hola Lilian,%20me%20interesa%20el%20producto%20${encodeURIComponent(product.title)}%20¿cuál%20es%20el%20precio?" 
              target="_blank" 
              class="btn btn-small btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close btn">Cerrar</a>
        </div>
      </div>
    `;
    // Agregar el modal al body
    modalsContainer.innerHTML += modal;
  });

  // Inicializar los modales de Materialize
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);

  const materialboxes = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialboxes);
}


// Función para renderizar los botones de paginación
function renderPagination() {
  pagination.innerHTML = ""; // Limpiar la paginación actual
  // Calcular el número total de páginas
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("btn", "pink", "lighten-4", "waves-effect");
    
    // Resaltar la página activa
    if (i === currentPage) button.classList.add("active");
    button.addEventListener("click", () => {
      currentPage = i;
      renderPaginatedProducts();
      renderPagination();
    });
    pagination.appendChild(button);
  }
}

// Función para filtrar productos por categoría
function filterProducts(category) {
  currentProducts=category=="all"
    ? products //Mostrar todos si la categoria es all
    : products.filter(products=>products.categoria===category);
  currentPage=1; //Reiniciar a la primera pagina
  renderPaginatedProducts();
  renderPagination();
}

// Función para renderizar las categorías
function renderCategories() {
  const uniqueCategories = [...new Set(products.map(product => product.categoria))];
  categoryContainer.innerHTML = `
      <button class="btn pink lighten-1" onclick="filterProducts('all')">Todos</button>
  `;
  uniqueCategories.forEach(category => {
      const button = document.createElement("button");
      button.textContent = category;
      button.classList.add("btn", "pink", "lighten-1", "waves-effect");
      button.addEventListener("click", () => filterProducts(category));
      categoryContainer.appendChild(button);
  });
}

// Inicializar las categorías
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
});




