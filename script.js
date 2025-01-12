// Fungsi memperbarui jam
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("jam").textContent = `${hours}:${minutes}:${seconds}`;
}

// Fungsi mengganti tema
function modeTheme() {
  document.body.classList.toggle("dark-mode");
}

setInterval(updateClock, 1000);
updateClock();
