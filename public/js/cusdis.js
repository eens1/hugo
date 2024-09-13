const toggleButton = document.getElementById('toggle-comments');
const commentsContainer = document.getElementById('comments-container');

toggleButton.addEventListener('click', () => {
   if (commentsContainer.style.display === 'none') {
      commentsContainer.style.display = 'block';
      toggleButton.textContent = 'Hide Comments';
   } else {
      commentsContainer.style.display = 'none';
      toggleButton.textContent = 'Show Comments';
   }
});
