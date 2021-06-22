import gallery from "./gallery-items.js";


const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const buttonClose = document.querySelector(".lightbox__button");


function  createGalleryList(){
    return gallery.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`;
  }).join("");
};

const arr = createGalleryList();
galleryList.insertAdjacentHTML("afterbegin", arr);

function onGalleryClick(e) {
    e.preventDefault();
  
    const dataSource = e.target.dataset.source;
if (e.target.classList.value === "gallery__image") {
    lightbox.classList.add("is-open");
    lightboxImage.setAttribute("src", dataSource);
  }
}


function onCloseImage(e){
    e.preventDefault();
    console.log(e.target)
    if (e.target.classList.value === "lightbox__button" || 
    e.target.classList.value === "lightbox__overlay") {
        lightbox.classList.remove("is-open");
        lightboxImage.setAttribute("src", "");
}
}

function onKeyPress(event) {
    console.log(event);
    let indexEl = gallery.findIndex(
        (gallery) => gallery.original === lightboxImage.src
      );
    console.log(indexEl);
    if (event.key === "Escape"){
     lightbox.classList.remove("is-open");
     lightboxImage.setAttribute("src", "");
    }
    if (event.key ==="ArrowLeft"){
        indexEl === 0 ? (indexEl = gallery.length - 1) : (indexEl -= 1);
     lightboxImage.setAttribute("src", gallery[indexEl].original)
    }
    if (event.key ==="ArrowRight"){
       indexEl === gallery.length - 1 ? (indexEl = 0) : (indexEl += 1);
     lightboxImage.setAttribute("src", gallery[indexEl].original)
    }
 }

galleryList.addEventListener("click", onGalleryClick);
window.addEventListener("keydown", onKeyPress);
lightbox.addEventListener("click", onCloseImage);