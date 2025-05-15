// Get modal elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const confirmBtn = document.getElementById("confirmBtn");

// Function to open the modal
function openModal() {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", function () {
  alert("Action confirmed!");
  closeModal();
});

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal when pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
