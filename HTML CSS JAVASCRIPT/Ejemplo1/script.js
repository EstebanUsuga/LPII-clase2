function crearServicio ({titulo,descripcion}) {
return`
   <div class="servicio">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>

   </div>
`;
}

function crearModal(){
    return `
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenido</h2>
                <button id="boton-cerrar">Cerrar</button>
            </div>
        </div>
    `;
}

const data= [
        {titulo: "Sección uno", descripcion: "Descripción de la sección uno"},
        {titulo: "Sección dos", descripcion: "Descripción de la sección dos"},
        {titulo: "Sección tres", descripcion: "Descripción de la sección tres"},
        {titulo: "Sección cuatro", descripcion: "Descripción de la sección cuatro"},
        {titulo: "Sección cinco", descripcion: "Descripción de la sección cinco"},
        {titulo: "Sección seis", descripcion: "Descripción de la sección seis"},
        {titulo: "Sección siete", descripcion: "Descripción de la sección siete"},

];
                                    // Las llaves 
function crearServicioConObjetos({titulo, descripcion}){
        const contenedorServicio=document.createElement('div');
        const parrafo = document.createElement('p');
        parrafo.innerText = descripcion;
        const heading = document.createElement('h3');
        heading.innerText = titulo;
        contenedorServicio.appendChild(heading); //appendChild = Llamar hijos de clases u objetos y darles hijos
        contenedorServicio.appendChild(parrafo);
        contenedorServicio.classList.add("servicio");
        return contenedorServicio;
}

const contenedor= document.querySelector('.contenedor-servicios');

for (servicio of data){
    const {descripcion} = servicio;
    console.log(descripcion);
    const servicioHtml= crearServicioConObjetos(servicio);
    contenedor.appendChild(servicioHtml);
    //contenedor.insertAdjacentHTML('beforeend', servicioHtml);
    
}

document.body.insertAdjacentHTML('beforeend', crearModal());
const botonCerrar = document.getElementById("boton-cerrar");
const modal = document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click', () => modal.remove());