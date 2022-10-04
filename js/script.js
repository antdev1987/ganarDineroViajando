// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.querySelectorAll('.openPoup');

// When the user clicks the button, open the modal
btn.forEach((item) => {
  item.onclick = function () {
    modal.style.display = 'flex';
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
