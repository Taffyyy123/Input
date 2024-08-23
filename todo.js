const button = document.getElementById("button");
const inputbox = document.getElementById("input");
const container = document.getElementById("container");
const List = document.createElement("ul");
List.className = "listContainer";
container.appendChild(List);
let arr = [];
const confirmContainer = document.createElement("div");
container.appendChild(confirmContainer);
confirmContainer.className = "confirmContainer";

let count = 0;

button.addEventListener("click", function () {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  let formattedTime = formatter.format(date);
  let time = document.createElement("div");
  time.id = "time";
  console.log(formattedTime);
  let text = inputbox.value;
  if (text.length == 0) {
  } else {
    arr.push(text);
  }
  let div = document.createElement("div");
  let differentId = count++;
  div.id = differentId;
  div.className = "text";
  let trash = document.createElement("button");
  trash.id = "trashCan";
  let editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.innerHTML = "Edit";
  editButton.className = "edit";
  editButton.id = "edit-button";
  let confirmBtn = document.createElement("button");
  confirmBtn.innerHTML = "Confirm";
  confirmBtn.className = "confirm";
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  for (let i = 0; i < arr.length; i++) {
    div.textContent = arr[i];
    List.appendChild(div);
    time.innerHTML = formattedTime;
    buttonContainer.appendChild(time);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(trash);
    div.appendChild(buttonContainer);
  }
  function deleteList() {
    let idContainer = document.getElementById(differentId);
    idContainer.remove();
  }
  trash.addEventListener("click", function () {
    deleteList();
  });
  function editList() {
    let editInput = document.createElement("input");
    editInput.id = "editingInput";
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    doneBtn.className = "editing-done";
    let editBtnContainer = document.createElement("div");
    editBtnContainer.appendChild(doneBtn);
    editBtnContainer.appendChild(editInput);
    editBtnContainer.className = "editButtons";
    div.appendChild(editBtnContainer);
    function clickingDone() {
      const di = document.getElementById(`${differentId}`);
      if (editInput.value == "") {
      } else {
        di.textContent = editInput.value;
        time.innerHTML = formattedTime;
        buttonContainer.appendChild(time);
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(confirmBtn);
        buttonContainer.appendChild(trash);
        div.appendChild(buttonContainer);
      }
    }
    doneBtn.addEventListener("click", function () {
      clickingDone();
    });
  }
  let i = 0;
  editButton.addEventListener("click", function () {
    editList();
    if (editButton.onclick) {
      i + 1;
    }
    if (i >= 1) {
      editButton.disabled = true;
    }
    console.log(i);
  });
  const backBtn = document.createElement("button");
  backBtn.innerHTML = "Back";
  backBtn.className = "confirm";
  confirmBtn.addEventListener("click", function () {
    buttonContainer.appendChild(time);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(trash);
    const confirmID = document.getElementById(`${differentId}`);
    confirmID.appendChild(buttonContainer);
    confirmContainer.appendChild(confirmID);
    confirmBtn.remove();
    editButton.remove();
  });
  backBtn.addEventListener("click", function () {
    let backID = document.getElementById(`${differentId}`);
    buttonContainer.appendChild(time);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(trash);
    backID.appendChild(buttonContainer);
    List.appendChild(backID);
    backBtn.remove();
  });
  input.value = "";
  arr = [];
});
