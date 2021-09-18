const colors = ["red", "green", "yellow", "blue", "pink", "purple"];
const search = document.querySelector("#colorSearch");
const playground = document.querySelector("#container");

window.onload = function () {
  for (let i = 0; i < colors.length; i++) {
    // create new element
    const colorBox = document.createElement("div");
    // add some content
    const newContent = document.createTextNode(`${colors[i]}`);

    // append child
    colorBox.appendChild(newContent);

    colorBox.style.backgroundColor = colors[i];
    colorBox.classList.add(`color-${i}`);

    playground.appendChild(colorBox);
  }
};

search.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const boxes = playground.getElementsByTagName("div");

  Array.from(boxes).forEach((box) => {
    const content = box.textContent;
    if (content.toLowerCase().indexOf(term) != -1) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});
