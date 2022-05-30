const green = document.querySelector(".color1");
const red = document.querySelector(".color2");
const blue = document.querySelector(".color3");

green.addEventListener("click", function () {
  let blocks = document.querySelectorAll(".block");
  console.log(blocks);
  for (i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "green";
    if (i === 8) {
      return;
    }
    console.log(blocks[i]);
  }
});
red.addEventListener("click", function () {
  let blocks = document.querySelectorAll(".block");
  console.log(blocks);
  for (i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "red";
    if (i === 16) {
      return;
    }
    console.log(blocks[i]);
  }
});
blue.addEventListener("click", function () {
  let blocks = document.querySelectorAll(".block");
  console.log(blocks);
  for (i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "blue";
    if (i === 24) {
      return;
    }
    console.log(blocks[i]);
  }
});
