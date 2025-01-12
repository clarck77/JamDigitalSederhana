function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "jam"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

function modeTheme() {
  const body = document.body;
  const jam = document.getElementById("jam");
  const button = document.getElementById("theme");

  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#282c34";
    jam.style.color = "#61dafb";
    button.style.backgroundColor = "#61dafb";
    button.style.color = "#282c34";
  } else {
    body.style.backgroundColor = "white";
    jam.style.color = "#282c34";
    button.style.backgroundColor = "#282c34";
    button.style.color = "white";
  }
}

setInterval(updateClock, 1000);
updateClock();
