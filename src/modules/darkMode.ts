function isDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  } else {
    return false;
  }
}

// const toggleButton = document.getElementById('toggle-button');

// if (localStorage.getItem('theme') === 'dark') {
//   document.body.classList.add('dark-mode');
//   toggleButton.textContent = 'Switch to Light Mode';
// }

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');

//   if (document.body.classList.contains('dark-mode')) {
//     toggleButton.textContent = 'Switch to Light Mode';
//     localStorage.setItem('theme', 'dark');
//   } else {
//     toggleButton.textContent = 'Switch to Dark Mode';
//     localStorage.setItem('theme', 'light');
//   }
// });
