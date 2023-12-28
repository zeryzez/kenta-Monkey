let cursor1 = document.getElementById("cursor1");
let cursor2 = document.getElementById("cursor2");
document.body.addEventListener("mousemove", (e) => {
  let rect1 = document.querySelector(".eye-container1").getBoundingClientRect();
  let rect2 = document.querySelector(".eye-container2").getBoundingClientRect();
  let x = e.clientX;
  let y = e.clientY;

  // Limiter les coordonnées aux coordonnées du disque
  let [newX1, newY1] = limitToCircle(x, y, rect1);
  let [newX2, newY2] = limitToCircle(x, y, rect2);

  cursor1.style.left = newX1 + "px";
  cursor1.style.top = newY1 + "px";

  cursor2.style.left = newX2 + "px";
  cursor2.style.top = newY2 + "px";
});

// Fonction pour limiter les coordonnées au disque
function limitToCircle(x, y, rect) {
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;

  // Calculer la distance par rapport au centre du cercle
  let distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

  // Si la distance est supérieure au rayon, ajuster les coordonnées
  if (distance > rect.width / 2) {
    let angle = Math.atan2(y - centerY, x - centerX);
    x = centerX + Math.cos(angle) * (rect.width / 2);
    y = centerY + Math.sin(angle) * (rect.height / 2);
  }

  return [x, y];
}
