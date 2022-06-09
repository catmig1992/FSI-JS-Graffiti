// Select some elements...
let header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
}

let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++) {
  dogNames[i].style.border = "5px solid red";
  dogNames[i].style.borderRadius = "20px";
}

let dogDescriptions = document.querySelectorAll(".dog-description");
for (let i = 0; i < dogDescriptions.length; i++) {
  dogDescriptions[i].style.textAlign = "right";
}

let footer = document.querySelector(".footer");
footer.style.textAlign = "left";
footer.style.color = "purple";
footer.style.fontSize = "24px";
