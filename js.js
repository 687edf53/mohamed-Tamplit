let bbb = document.getElementById("barss")

let menu = document.getElementById("menu")



bbb.addEventListener("click", function() {
  menu.style.display = 'block'
  this.style.display = "none"
})

let close1 = document.getElementById("close-menu")

close1.onclick = function() {
  bbb.style.display = "inline"
  menu.style.display = 'none'
}