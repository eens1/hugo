document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const commentBox = document.querySelector('.comment-box');
  let isOpen = false;

  dropdownBtn.addEventListener('click', function() {
    isOpen = !isOpen;
    commentBox.classList.toggle('active');
    dropdownBtn.textContent = isOpen ? 'Hide Comments' : 'Show Comments';
    
    if (isOpen) {
      // Load Cusdis when comments are first opened
      if (!window.CUSDIS) {
        let script = document.createElement('script');
        script.src = 'https://cusdis.com/js/cusdis.es.js';
        document.body.appendChild(script);
      } else {
        // Refresh Cusdis if it's already loaded
        window.CUSDIS.initial();
      }
    }
  });
});
