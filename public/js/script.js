const openMenus = document.querySelectorAll(".openMenu");

// delete modal
const openDeleteConfirmations = document.querySelectorAll(".delete");
const deleteConfirmations = document.querySelectorAll(".deleteConfirmation");
const closeConfirmation = document.querySelectorAll(".closeConfirmation");
// update modal
const openUpdateModals = document.querySelectorAll(".update");
const updateForms = document.querySelectorAll(".updateForm");
const closeUpdateModals = document.querySelectorAll(".closeUpdate");
// description

openUpdateModals.forEach((openUpdateModal, index) => {
  openUpdateModal.addEventListener("click", () => {
    updateForms[index].classList.add("active");
  });
  closeUpdateModals[index].addEventListener("click", () => {
    updateForms[index].classList.remove("active");
  });
});

openDeleteConfirmations.forEach((openDeleteConfirmation, index) => {
  openDeleteConfirmation.addEventListener("click", () => {
    deleteConfirmations[index].classList.add("active");
  });
  closeConfirmation[index].addEventListener("click", () => {
    deleteConfirmations[index].classList.remove("active");
  });
});
function openDeleteConfirmation() {}
const openConfirmation = openMenus.forEach((openMenu) => {
  openMenu.addEventListener("click", () => {
    let cardControl = openMenu.nextElementSibling;
    if (cardControl.classList.contains("active")) {
      cardControl.classList.remove("active");
    } else {
      cardControl.classList.add("active");
    }
  });
});

// document.querySelector("body").addEventListener("click", () => {
//
// });
