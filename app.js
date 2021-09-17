let colors = ["red", "green", "yellow", "blue", "pink"];
const search = document.querySelector("#colorSearch");
let playground = document.querySelector("#test1");

function createBox() {
  for (let i = 0; i < colors.length; i++) {
    // create new element
    const newBox = document.createElement("div");
    // add some content
    const newContent = document.createTextNode(`${colors[i]}`);

    // append child
    newBox.appendChild(newContent);

    newBox.style.backgroundColor = colors[i];
    newBox.classList.add(`color-${i}`);

    playground.appendChild(newBox);
  }
}

createBox();

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
