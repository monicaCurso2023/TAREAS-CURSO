//Inserta nun documento 'html' diferentes imaxes, así como tamén diferentes etiquetas, como pode ser :
//Un 'div'
//Un 'span'
//Lembra enlazar ben o arquivo de javascript, e se importas diferentes arquivos utiliza o atributo 'type' co valor 'module'
//Crea diferentes estilos e insértallos a estas....



import { ELEMENTOS } from './constantes.js';

// Seleccionamos o contedor principal
const app = document.getElementById('app');

// Creamos o contedor de divs
const container = document.createElement('div');
container.classList.add('container');
app.appendChild(container);

// Xeramos os divs dinámicamente
ELEMENTOS.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('box');

    const h2 = document.createElement('h2');
    h2.textContent = item.titulo;
    div.appendChild(h2);

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.titulo;
    div.appendChild(img);

    const p = document.createElement('p');
    p.textContent = item.texto + ' ';

    const span = document.createElement('span');
    span.classList.add('highlight');
    span.textContent = 'span destacado';

    span.addEventListener('click', () => {
        span.textContent = 'Fíxose click!';
        span.classList.add('clicked');
    });

    p.appendChild(span);
    div.appendChild(p);

    container.appendChild(div);
});
