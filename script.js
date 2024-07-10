const container = document.getElementById("container");
const buttons = document.querySelectorAll(".pixelsz");
const colorPick = document.getElementById("colorchoice");
const randomButt = document.getElementById("random");
const resetButt = document.getElementById("reset");
const eraserButt = document.getElementById("eraser");

const createPixels = (size) => {
  container.innerHTML = "";

  const pixelCount = Math.floor(container.offsetWidth / size);
  const totalPixels = pixelCount * pixelCount;

  for (let i = 0; i < totalPixels; i++) {
    const div = document.createElement("div");

    div.setAttribute("class", "pixel");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = "orange";

    function reset() {
      div.style.backgroundColor = "orange";
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = colorPick.value;
      });
      colorPick.value = "#DEDEDE";
    }
    function erase() {
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "orange";
      });
      eraserBtnOn = 0;
    }
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = colorPick.value;
    });

    function randomcolor() {
      div.addEventListener("mouseenter", function () {
        const color = "#" + Math.floor(Math.random() * 16777216).toString(16);
        div.style.backgroundColor = color;
      });
    }
    function colorpicked()
    {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = colorPick.value;
          });
    }
    colorPick.addEventListener('click',colorpicked);
    resetButt.addEventListener("click", reset);
    eraserButt.addEventListener("click", erase);
    randomButt.addEventListener("click", randomcolor);

    container.appendChild(div);
  }
};

createPixels(8);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const size = parseInt(event.target.textContent);
    createPixels(size);
  });
});
