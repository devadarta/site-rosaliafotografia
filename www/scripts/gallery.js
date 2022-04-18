const range = (start, end, length = end - start) => Array.from({
  length}, (_, i) => start + i);
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup-container');
const previous = document.getElementById('btn-previous');
const next = document.getElementById('btn-next');
const close = document.getElementById('btn-close');
const imageIndexes = range(1, 40);
let selected = {
  image: document.getElementById('selected-image'),
  index: 0
};
let ultimoFiltroUsado = '';

const pathPrefixImages = `galeria/Photo-`;
// TODO: Carregar imagens do ImageKit
//const pathPrefixImages = `https://ik.imagekit.io/devadarta/RosaliaFotografia/Photo-`;
const carregaGaleria = ((array) => {
  array.forEach((item, i) => {
    const image = document.createElement('img');
    image.src = pathPrefixImages + `${item}.jpg`;
    image.alt = `Ensaio fotográfico por Rosália Benvegnú. Photo ${item}`;
    image.classList.add('gallery__image');

    image.addEventListener('click', () => {
      popup.style.transform = `translateY(0)`;
      selected.image.src = pathPrefixImages + `${item}.jpg`;
      selected.image.alt = `Ensaio fotográfico por Rosália Benvegnú. Photo ${item}`;
      selected.index = i;
    })

    gallery.appendChild(image);
  });
})
const pessoalIndexes = range(1, 10);
const modaIndexes = range(11, 16);
const estudioIndexes = range(17, 33);
const corporativoIndexes = range(33, 40);
const todos = document.getElementById('lb-todos');
const pessoal = document.getElementById('lb-pessoal');
const moda = document.getElementById('lb-moda');
const estudio = document.getElementById('lb-estudio');
const corporativo = document.getElementById('lb-corporativo');

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = pathPrefixImages + `${i}.jpg`;
  image.alt = `Ensaio fotográfico por Rosália Benvegnú. Photo ${i}`;

  image.classList.add('gallery__image');
  // TODO: Definir layout para cada filtro de fotos
  if ([1, 9, 10, 11, 12, 16, 17, 18, 21, 22, 23, 24, 29, 30, 31, 32, 33, 34, 35].indexOf(i) > -1)
    image.classList.add('image-grid-2-rows');
  if ([17].indexOf(i) > -1)
    image.classList.add('image-grid-2-cols');

  image.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`;
    selected.image.src = pathPrefixImages + `${i}.jpg`;
    selected.image.alt = `Ensaio fotográfico por Rosália Benvegnú. Photo ${i}`;
    selected.index = i;
  })

  gallery.appendChild(image);
  ultimoFiltroUsado = todos.id;
});

close.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  selected.image.src = '';
})

next.addEventListener('click', () => {
  selected.index += 1;
  selected.image.src = pathPrefixImages + `${selected.index}.jpg`;
})

previous.addEventListener('click', () => {
  selected.index -= 1;
  selected.image.src = pathPrefixImages + `${selected.index}.jpg`;
})


todos.addEventListener('click', () => {
  if (ultimoFiltroUsado != todos.id)
    filtrarFotos(gallery.childNodes, imageIndexes);
  ultimoFiltroUsado = todos.id;
})

pessoal.addEventListener('click', () => {
  if (ultimoFiltroUsado != pessoal.id)
    filtrarFotos(gallery.childNodes, pessoalIndexes);
  ultimoFiltroUsado = pessoal.id;
})

moda.addEventListener('click', () => {
  if (ultimoFiltroUsado != moda.id)
    filtrarFotos(gallery.childNodes, modaIndexes);
  ultimoFiltroUsado = moda.id;
})

estudio.addEventListener('click', () => {
  if (ultimoFiltroUsado != estudio.id)
    filtrarFotos(gallery.childNodes, estudioIndexes);
  ultimoFiltroUsado = estudio.id;
})

corporativo.addEventListener('click', () => {
  if (ultimoFiltroUsado != corporativo.id)
    filtrarFotos(gallery.childNodes, corporativoIndexes);
  ultimoFiltroUsado = corporativo.id;
})

const filtrarFotos = ((listaImg, indicesValidos) => {
  let numPhoto = ''
  let indexInicial = 0,
    indexFinal = 0;

  listaImg.forEach((img, i) => {
    indexInicial = img.src.lastIndexOf('-');
    indexFinal = img.src.lastIndexOf('.');

    if (indexInicial > -1 && indexFinal > -1) {
      numPhoto = img.src.substring(indexInicial + 1, indexFinal);

      if (indicesValidos.indexOf(parseInt(numPhoto)) == -1)
        img.setAttribute("hidden", "hidden");
      else
        img.removeAttribute("hidden", "hidden");
    }
  });
})
