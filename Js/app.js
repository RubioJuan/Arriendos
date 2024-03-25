const Casas = [
    {
        "id": "Casa1",
        "about": "Casa con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público. 🚗",
        "picture": "https://pics.nuroa.com/alquilo_amoblado_irawa_ca%C3%B1averal_floridablanca_5360010685965752860.jpg",
    "squarePic": "https://img-co-1.trovit.com/x1k1MT1EF1L1D/x1k1MT1EF1L1D.1_11.jpg",
        "name": "Casa 1"
    },
    {
        "id": "Casa2",
        "about": "Encantadora casa con 3 habitaciones y 2 baños en Floridablanca. Cocina integral y terraza para momentos familiares con vistas a las montañas. Ubicada cerca de colegios, parques y hospitales, con acceso conveniente a centros comerciales y transporte público. ¡El lugar perfecto para crear recuerdos inolvidables en familia!",
        "picture": "https://staticw.s3.amazonaws.com/inmuebles/b51645420210628091543.jpg",
    "squarePic": "https://img-co-1.trovit.com/B1qvF1v1MFi/B1qvF1v1MFi.9_11.jpg",
        "name": "Casa 2"
    },
    {
        "id": "Casa3",
        "about": "Casa de 3 habitaciones y 2 baños en Floridablanca. Cocina integral y terraza con vistas impresionantes a las montañas. Cerca de colegios, parques y centros comerciales, con fácil acceso al transporte público. Ideal para disfrutar de la vida moderna con una conexión directa a la naturaleza.",
        "picture": "https://i.pinimg.com/736x/ca/0f/7f/ca0f7fee2bb8b0b02e4bf35688dbf5ce.jpg",
    "squarePic": "https://img-co-1.trovit.com/N41CQ4p13l/N41CQ4p13l.9_11.jpg",
        "name": "Casa 3"
    },
    {
        "id": "Casa4",
        "about": "Casa de retiro con 3 habitaciones y 2 baños en Floridablanca. Cocina integral y terraza para disfrutar de la serenidad de las montañas. Conveniente acceso a colegios, parques y centros comerciales, junto con transporte público cercano. ¡Experimenta la tranquilidad y el confort en este refugio único en Floridablanca!",
        "picture": "https://d3s5pkt10pk3ga.cloudfront.net/resizedImages/original/site/fincaraiz_service/media/listing/66968d5e-99be-48e0-bb7c-e06ed5e78806/photos/66968d5e-99be-48e0-bb7c-e06ed5e78806_1_True_1763356d-ebf7-45c2-a2e7-750f8e210fbc.jpg",
    "squarePic": "https://kolombia.b-cdn.net/small_light(of=jpg,q=55)/2023/09/25/homes-5986126.jpg",
        "name": "Casa 4"
    }
]

const apto = [
    {
        "id": "apto1",
        "about": "Apartamento contemporáneo en Floridablanca con vistas panorámicas a las montañas. 2 habitaciones, 2 baños, cocina integral y balcón para disfrutar del paisaje. Cerca de colegios, parques y centros comerciales, con fácil acceso al transporte público.",
        "picture": "https://imganuncios.mitula.net/apartamento_en_arriendo_3240008710097860694.jpg",
    "squarePic": "https://img-co-1.trovit.com/s1y01X1e13Ve/s1y01X1e13Ve.11_11.jpg",
        "name": "Apartamaneto 1"
    },
    {
        "id": "apto2",
        "about": "Acogedor apartamento de 2 habitaciones y 1 baño en Floridablanca. Cocina integral y balcón con vistas naturales. Ubicado cerca de colegios, parques y hospitales, con acceso conveniente a centros comerciales y transporte público.",
        "picture": "https://pics.nuroa.com/apartamento_en_arriendo_en_zipaquira_algarra_3930006707851490366.jpg",
    "squarePic": "https://img-co-1.trovit.com/1z1v1u1r1nj8X/1z1v1u1r1nj8X.4_11.jpg",
        "name": "Apartamaneto 2"
    },
    {
        "id": "apto3",
        "about": "Apartamento de 2 habitaciones y 2 baños en Floridablanca, perfecto para un estilo de vida tranquilo. Cocina integral y balcón para disfrutar de la serenidad natural. Cerca de colegios, parques y centros comerciales, con transporte público a tu alcance.",
        "picture": "https://d3s5pkt10pk3ga.cloudfront.net/resizedImages/original/site/fincaraiz_service/media/listing/8f7cf438-4949-4470-aad1-3b9b9d5029f8/photos/8f7cf438-4949-4470-aad1-3b9b9d5029f8_0_True_68b2ebae-eabe-484d-ae4d-849eeb7985bc.jpg",
    "squarePic": "https://img-co-1.trovit.com/B1_1Aj14jt1w/B1_1Aj14jt1w.1_11.jpg",
        "name": "Apartamaneto 3"
    },
    {
        "id": "apto4",
        "about": "Apartamento de 2 habitaciones y 2 baños en Floridablanca. Cocina integral y balcón con vistas a las montañas. Cerca de colegios, parques y centros comerciales, con acceso fácil al transporte público. Ideal para disfrutar de un estilo de vida moderno en un entorno natural.",
        "picture": "https://img.clasf.co/2019/01/20/ARRIENDO-APARTAESTUDIO-CUMBRE-FLORIDABLANCA-20190120050621.2617760015.jpg",
    "squarePic": "https://img-co-1.trovit.com/1a1kZ1g1N1d1c1I/1a1kZ1g1N1d1c1I.23_11.jpg",
        "name": "Apartamaneto 4"
    }
]

// Función para crear la estructura HTML de una propiedad (casa o apartamento)
function crearEstructuraHTML(propiedad) {
    const divHola = document.createElement('div');
    divHola.classList.add('propiedad');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = propiedad.picture;
    img.alt = propiedad.name;

    const br = document.createElement('br');

    const button = document.createElement('button');
    button.textContent = 'Ver';
    button.classList.add('ver');

    const divModal = document.createElement('div');
    divModal.classList.add('modalContainer');

    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');

    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.textContent = 'X';

    const h2 = document.createElement('h2');
    h2.textContent = propiedad.name;

    const p = document.createElement('p');
    p.textContent = propiedad.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = propiedad.squarePic;
    imgSquare.alt = propiedad.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divHola.appendChild(divTitulo1);
    divHola.appendChild(divModal);

    return divHola;
}

// Función para cargar las propiedades (casas o apartamentos) en el contenedor adecuado
function cargarPropiedades(propiedades, contenedor) {
    propiedades.forEach(propiedad => {
        const elemento = crearEstructuraHTML(propiedad);
        contenedor.appendChild(elemento);

        // Event listener para mostrar el modal al hacer clic en "Ver"
        const button = elemento.querySelector('.ver');
        button.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'block';
        });

        // Event listener para cerrar el modal al hacer clic en la "X"
        const spanClose = elemento.querySelector('.close');
        spanClose.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'none';
        });

        // Event listener para cerrar el modal al hacer clic fuera de él
        window.addEventListener('click', (event) => {
            const modal = elemento.querySelector('.modalContainer');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Cargar tanto las casas como los apartamentos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const contenedorCasas = document.getElementById('casas');
    const contenedorApartamentos = document.getElementById('apartamentos');
    cargarPropiedades(Casas, contenedorCasas);
    cargarPropiedades(apto, contenedorApartamentos);
});
