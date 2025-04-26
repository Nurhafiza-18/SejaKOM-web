import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const comicPages = [
  {
    src: "https://raw.githubusercontent.com/Nurhafiza-18/SejaKOM-web/main/ChatGPT%20Image%20Apr%2022,%202025,%2007_21_52%20AM.png",
    width: 1000,
    height: 1400
  },
  {
    src: "https://raw.githubusercontent.com/Nurhafiza-18/SejaKOM-web/main/ChatGPT%20Image%20Apr%2022,%202025,%2007_34_39%20AM.png",
    width: 1000,
    height: 1400
  }
];

const gallery = document.getElementById('gallery');
comicPages.forEach((page) => {
  const a = document.createElement('a');
  a.href = page.src;
  a.setAttribute('data-pswp-width', page.width);
  a.setAttribute('data-pswp-height', page.height);
  gallery.appendChild(a);
});

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js'),
});
lightbox.init();

export function openGallery() {
  lightbox.loadAndOpen(0);
}
window.openGallery = openGallery;
