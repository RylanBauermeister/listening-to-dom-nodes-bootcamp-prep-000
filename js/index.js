// using this file is optional
// you can also load the code snippets in using your browser's console
window.onload = doThings;
function doThings() {
  const main = document.getElementById('main');
  main.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}