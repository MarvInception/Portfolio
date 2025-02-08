// Date de naissance (modifiez la date selon la vôtre)
const birthDate = new Date("2003-02-07");

// Fonction pour calculer l'âge
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Vérifie si l'anniversaire de cette année est passé
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Fonction pour afficher l'âge
function displayAge() {
    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.textContent = `Âge : ${calculateAge(birthDate)} ans`;
    }
}

// Appel de la fonction après le chargement de la page
window.addEventListener("DOMContentLoaded", displayAge);

// Sélection des éléments
const modal = document.getElementById("modal");
const profilePic = document.getElementById("profile-pic");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Ouvrir la fenêtre modale lors du clic sur l'image
profilePic.addEventListener("click", () => {
    modal.style.display = "block"; // Afficher la modale
    modalImg.src = profilePic.src; // Mettre l'image de profil dans la modale
});

// Fermer la fenêtre modale en cliquant sur le bouton "close"
closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Cacher la modale
});

// Fermer la fenêtre modale en cliquant en dehors de l'image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // Cacher la modale
    }
});

