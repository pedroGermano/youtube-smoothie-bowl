function changeSmoothie(fruit) {
  const bowls = document.getElementById("bowls");

  bowls.classList = "";
  bowls.classList.add(fruit);

  const body = document.querySelector("body");
  body.style.backgroundColor = `var(--${fruit}-background)`;

  const circle = document.getElementById("circle");
  circle.style.backgroundColor = `var(--${fruit}-circle)`;
}
