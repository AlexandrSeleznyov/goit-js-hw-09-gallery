import gallery from "./gallery-items.js";


const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

createGalleyList();
galleryList.addEventListener("click", onGalleryClick);
lightbox.addEventListener("click", onCloseImage);
window.addEventListener("keydown", onKeyPress);


function createGalleyList(){
  const array = gallery.map((gallery, index) => {
    return `
    <li class="gallery__item">
    <a
        class="gallery__link"
        href="${gallery.original}"
    >
        <img
        class="gallery__image"
        src="${gallery.preview}"
        data-source="${gallery.original}"
        data-index= ${index}
        alt="${gallery.description}"
        />
    </a>
    </li>`;
   }).join("");
   galleryList.innerHTML=array;
   console.log(galleryList);
  };

function onGalleryClick(event){
event.preventDefault();
const dataSource = event.target.dataset.source;
const idx = event.target.dataset.index;
console.log("idx", idx);


if (event.target.classList.value === "gallery__image"){
 lightbox.classList.add("is-open");
 lightboxImage.setAttribute("src", dataSource);
 lightboxImage.setAttribute("data-index", idx);
 
 return idx;
}
}

function onCloseImage(event){
if ((event.target.classList.value === "lightbox__overlay")||(event.target.classList.value === "lightbox__button")){
  event.preventDefault();
  lightbox.classList.remove("is-open");
  lightboxImage.setAttribute("src", "");
}
}

function onKeyPress(event){
  event.preventDefault();
let indexEl = lightboxImage.dataset.index;
  console.log("event index", lightboxImage.dataset.index);
  if (event.key === "Escape"){
    lightbox.classList.remove("is-open");
  lightboxImage.setAttribute("src", "");
  }
  if (event.key === "ArrowLeft"){
    if (indexEl>=0) {
      indexEl -=1;
      lightboxImage.setAttribute("src", gallery[indexEl].original);}
    else {lightboxImage.setAttribute("src", gallery[gallery.length-1].original)}
  
  }
}