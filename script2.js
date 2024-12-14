function showContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('contactModal')) {
        closeModal();
    }
}