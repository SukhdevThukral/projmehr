
document.getElementById("navToggle").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);