import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);   
    
galleryContainer.addEventListener('click', onGalleryContainerClick);    

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => 
                `< div class="gallery__item" >
                    <a class="gallery__link" href="large-image.jpg">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div > `          
            )
        .join('');
}

function onGalleryContainerClick(evt) {
    const isGalleryItem = evt.target.classList.contains('gallery__item');
    if (!isGalleryItem) {
        return;
    }
    
}