// Add functionality for editing, saving, liking, and commenting
document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.querySelector(".edit-btn");
    const saveBtn = document.querySelector(".save-btn");
    const postTitle = document.querySelector(".post-title");
    const postText = document.querySelector(".post-text");
    const likeBtn = document.querySelector(".like-btn");
    const likeStatus = document.querySelector(".like-status");
    const commentBox = document.querySelector(".comment-box");
    const commentBtn = document.querySelector(".comment-btn");
    const allComments = document.querySelector(".all-comments");

    // Edit button functionality
    editBtn.addEventListener("click", () => {
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.style.border = "1px solid pink";
        postText.style.border = "1px solid pink";
        editBtn.style.display = "none";
        saveBtn.style.display = "block";
    });

    // Save button functionality
    saveBtn.addEventListener("click", () => {
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.style.border = "none";
        postText.style.border = "none";
        editBtn.style.display = "block";
        saveBtn.style.display = "none";
        // Save changes to server or wherever needed
    });

    // Like button functionality
    let likeCount = 0;
    likeBtn.addEventListener("click", () => {
        likeCount++;
        likeStatus.textContent = likeCount === 1 ? "1 person likes this!" : `${likeCount} people like this!`;
        likeBtn.textContent = "Liked!";
    });

    // Comment button functionality
    commentBtn.addEventListener("click", () => {
        const commentText = commentBox.value;
        if (commentText) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.textContent = commentText;
            allComments.insertBefore(commentElement, allComments.firstChild);
            commentBox.value = "";
        }
    });
});
