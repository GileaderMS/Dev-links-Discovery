function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle("light")

  // pegar a imagem é assim
  const img = document.querySelector("#profile img")

  // substiruir a imagem
  if (html.classList.contains("light")) 
    {img.setAttribute("src", "./assets/Profile.jpg")}
  else {img.setAttribute("src", "./assets/Profile-1.png")}
}