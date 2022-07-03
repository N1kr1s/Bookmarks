'use strict';
class BookmarkMaker {
  constructor() {
    this.modalIsOpen = false;
    this.localArray = [];
    this.modal = document.getElementById('modal');
    this.showModal = document.getElementById('show-modal');
    this.closeModal = document.getElementById('close-modal');
    this.bookmarkForm = document.getElementById('bookmark-form');
    this.bookmarksContainer = document.getElementById('bookmarks-container');
    this.showModal.addEventListener('click', () => {
      this.modalOpen();
    });
    this.closeModal.addEventListener('click', () => {
      this.modalClose();
    });
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.modalClose();
    });
    this.bookmarkForm.addEventListener('submit', this.submitForm.bind(this));
  }
  modalOpen() {
    this.modalIsOpen = true;
    this.modal.classList.add('show-modal');
  }
  modalClose() {
    this.modalIsOpen = false;
    this.modal.classList.remove('show-modal');
  }
  submitForm(e) {
    this.bookmarkForm;
    const target = e.target;
    const websiteName = target[0].value;
    const websiteURL = target[1].value;
    // *Saving to local storage
    this.localArray.push({ websiteName, websiteURL });
    localStorage.setItem('collection', JSON.stringify(this.localArray));
    const nodeToAppend = document.createElement('div');
    nodeToAppend.classList.add('item');
    nodeToAppend.innerHTML = `
      <i
      class="fa-solid fa-circle-xmark original"
      title="delete bookmark"
    ></i>
    <div class="name">
      <img src="favicon.ico" alt="favicon" />
      <a href="https://${websiteURL}" target="_blank">${websiteName}</a>
      `;
    nodeToAppend.children[0].addEventListener('click', () => {
      this.bookmarksContainer.children;
    });
    this.bookmarksContainer.appendChild(nodeToAppend);
  }
}
const bookmarkMaker = new BookmarkMaker();
