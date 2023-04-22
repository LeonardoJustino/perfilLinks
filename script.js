function toggleMode() {
  const html = document.documentElement /*documentElement é o html*/
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  
  if (html.classList.contains("light")) {
   
    img.setAttribute("src", "/assets/fotoDePerfil.png")
    img.setAttribute(
      "alt",
      "Logo representativa"
    )
    }else{
      img.setAttribute("src", "/assets/fotoDePerfil.png")
    img.setAttribute(
      "alt",
      "Logo representativa"
    )
    }
}
