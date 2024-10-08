// loadFixedPart

function loadFixedPart(url, target) {
  $("." + target).load(url);
}

window.addEventListener("load", function () {
  loadFixedPart("navbar.html", "navbar-container");
  loadFixedPart("footer.html", "footer-container");
  loadFixedPart("subscribe.html", "subscribe-container");
});
