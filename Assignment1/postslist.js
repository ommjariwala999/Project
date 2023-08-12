// Add functionality for the delete icons and ellipsis icons
document.addEventListener("DOMContentLoaded", function () {
    const deleteIcons = document.querySelectorAll(".delete-icon");
    const ellipsisIcons = document.querySelectorAll(".ellipsis");

    deleteIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // Display modal for deletion
            // Handle delete and rearrange posts
        });
    });

    ellipsisIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // Redirect to 'post.html' for post details
        });
    });
});
