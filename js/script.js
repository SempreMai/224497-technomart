var writeUs = document.querySelector(".write-us-link");

var modalWrite = document.querySelector(".modal-write-us");

var closeWriteUs = document.querySelector(".write-us-close");

var formWrite = document.querySelector(".write-us-form");

var mapLink = document.querySelector(".map-small");

var mapPopup = document.querySelector(".modal-map-popup");

var mapClose = document.querySelector(".map-close");

var nameWrite = formWrite.querySelector("[name = your_name]");

var emailWrite = formWrite.querySelector("[name = your_email]");

var fillForm = formWrite.querySelector("form");

writeUs.addEventListener("click", function (evt) {

   evt.preventDefault();

   modalWrite.classList.add("modal-show");

   nameWrite.focus();
});

closeWriteUs.addEventListener("click", function (evt) {

  evt.preventDefault();

  modalWrite.classList.remove("modal-show");
});

fillForm.addEventListener("submit", function (evt) {

  if (!nameWrite.value || !emailWrite.value) {

    evt.preventDefault();

    console.log("Нужно ввести имя и адрес");

  } else {

    if (isStorageSupport) {
      localStorage.setItem("your_email", emailWrite.value);
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
})
