document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav-toggler").addEventListener("click", (event) => {
    const nav = document.getElementById("navigation");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
});
