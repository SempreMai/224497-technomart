var writeUs = document.querySelector(".write-us-link");

var modalWrite = document.querySelector(".modal-write-us");

var closeWriteUs = document.querySelector(".write-us-close");

var formWrite = document.querySelector(".write-us-form");

var mapLink = document.querySelector(".map-small");

var mapPopup = document.querySelector(".modal-map-popup");

var mapClose = document.querySelector(".map-close");

var nameWrite = formWrite.querySelector("[name = your_name]");

var emailWrite = formWrite.querySelector("[name = your_email]");

var fillForm = modalWrite.querySelector("form");

var storage = localStorage.getItem("emailWrite");

var isStorageSupport = true;
var storage = "";

try {

  storage = localStorage.getItem("nameWrite");

} catch (err) {

  isStorageSupport = false;

}

writeUs.addEventListener("click", function (evt) {

   evt.preventDefault();

   modalWrite.classList.add("modal-show");

   nameWrite.focus();

   if (storage) {

     nameWrite.value = storage;

   }
});

closeWriteUs.addEventListener("click", function (evt) {

  evt.preventDefault();

  modalWrite.classList.remove("modal-show");

  modalWrite.classList.remove("modal-error");
});

fillForm.addEventListener("submit", function (evt) {

  if (!nameWrite.value || !emailWrite.value) {

    evt.preventDefault();

    modalWrite.classList.add("modal-error");

  } else {

    if (isStorageSupport) {

      localStorage.setItem("your_name", nameWrite.value);
    }
  }
});

mapLink.addEventListener("click", function (evt) {

  evt.preventDefault();

  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {

  evt.preventDefault();

  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {

    evt.preventDefault();

    if (modalWrite.classList.contains("modal-show")) {

      modalWrite.classList.remove("modal-show");

    }
  }
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {

    evt.preventDefault();

    if (mapPopup.classList.contains("modal-show")) {

      modalWrite.classList.remove("modal-show");

    }
  }
});
