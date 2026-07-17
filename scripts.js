/**
 * Navigation entre les pages
 * @param {string} pageId - L'ID de la page à afficher
 */
function switchPage(pageId) {
    // Masquer toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Afficher la page ciblée
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Mettre à jour les liens de navigation actifs
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // Fermer le menu mobile
    document.getElementById('navMenu').classList.remove('open');
    
    // Scroll vers le haut
    window.scrollTo(0, 0);
}

/**
 * Toggle du menu mobile
 */
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

/**
 * Navigation entre les pôles d'équipe
 * @param {string} poleId - L'ID du pôle à afficher
 */
function switchPole(poleId) {
    // Masquer tous les pôles
    const poles = document.querySelectorAll('.pole-content');
    poles.forEach(pole => pole.classList.remove('active'));

    // Afficher le pôle ciblé
    const targetPole = document.getElementById(poleId);
    if (targetPole) {
        targetPole.classList.add('active');
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Page par défaut déjà active via HTML
    console.log('Application initialisée');
});