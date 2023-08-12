// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Event listeners for Sign Up and Sign In buttons
document.getElementById('signUpBtn').addEventListener('click', () => {
    openModal('signUpModal');
});

document.getElementById('signInBtn').addEventListener('click', () => {
    openModal('signInModal');
});
