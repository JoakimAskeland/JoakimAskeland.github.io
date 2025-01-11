document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const popupMenu = document.getElementById('popupMenu');
  
    menuButton.addEventListener('click', () => {
      popupMenu.classList.toggle('hidden');
    });
  
    // Optional: Close the menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!popupMenu.contains(event.target) && event.target !== menuButton) {
        popupMenu.classList.add('hidden');
      }
    });
  });