let button = document.getElementById("enter");

let input = document.getElementById("userinput");

let ul = document.querySelector("ul");

let li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

for (let i = 0; i < li.length; i++) {
  let listEle = li[i];
  let button = document.createElement("button");
  listEle.appendChild(button);
  button.appendChild(document.createTextNode("Delete"));
  button.classList.add("del");
  const liPressed = (e) => {
    listEle.classList.toggle("done");
  };
  listEle.addEventListener("click", liPressed);
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
}

function createListElement() {
  let li = document.createElement("li");
  let button = document.createElement("button");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);
  button.appendChild(document.createTextNode("Delete"));
  input.value = "";
  const liPressed = (e) => {
    li.classList.toggle("done");
  };
  li.addEventListener("click", liPressed);
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

// FUNCTION WITHOUT () NEXT TO IT IS CALLED CALLBACK FUNCTION
button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);
