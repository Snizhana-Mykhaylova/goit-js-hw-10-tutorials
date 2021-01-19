import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(modalTemplate, {
  onShow: instance => {
    const buttonCloseModalRef = instance
      .element()
      .querySelector('button[data-close-modal]');
    buttonCloseModalRef.onclick = instance.close;
  },
});

const buttonOpenModalRef = document.querySelector('button[data-open-modal]');

buttonOpenModalRef.addEventListener('click', () => instance.show());
