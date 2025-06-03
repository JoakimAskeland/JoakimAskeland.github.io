const subMenu = document.getElementsByClassName("popupMenu")[0];
const menuButt = document.getElementById("menuButton");

const cvButt = document.getElementById("ResumeButton_Index");

menuButt.onclick = function () {
  if (subMenu.style.display == "flex") {
    subMenu.style.display = "none";
  }
  else {
    subMenu.style.display = "flex";
  }
}

cvButt.onclick = function () {
  window.open("Resume.html", "_self");
}

/*
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
  */