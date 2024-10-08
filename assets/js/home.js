let bannerCount = 1;
const bannerContainer = document.querySelector(".main-banner");
setInterval(function () {
  bannerContainer.classList.remove(`active${bannerCount}`);
  if (bannerCount != 3) {
    bannerCount = bannerCount + 1;
  } else {
    bannerCount = 1;
  }
  bannerContainer.classList.add(`active${bannerCount}`);
  console.log(bannerCount);
}, 2000);
