function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  var menu = document.querySelector('.menu');
  
  var menuWidth = dropdownMenu.offsetWidth;
  var menuHeight = dropdownMenu.offsetHeight;
  var menuRect = menu.getBoundingClientRect();
  
  dropdownMenu.style.left = "-100%"; // Оновлено: Змінено на -100%
  dropdownMenu.style.right = "auto";
  
  if (menuRect.top + menuHeight > window.innerHeight) {
      dropdownMenu.style.top = "auto";
      dropdownMenu.style.bottom = "100%";
  } else {
      dropdownMenu.style.top = "0";
      dropdownMenu.style.bottom = "auto";
  }
  
  dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

function navigateTo(page) {
  window.location.href = page;
}


function navigateToWithAnchor(page, anchor) {
  window.location.href = page + '#' + anchor;
}



function updateField() {
  var dropdown = document.getElementById("dropdown");
  var selectedValue = document.getElementById("selectedValue");

  // Отримуємо вибране значення та встановлюємо його у поле вводу
  selectedValue.value = dropdown.value;
}



function checkEnter(event) {
  if (event.key === "Enter") {
      saveText();
  }
}

function saveText() {
  // Отримуємо значення з текстового поля
  var userInput = document.getElementById("userInput").value;

  // Виводимо значення в консоль
  console.log("Збережений текст:", userInput);
}


function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
