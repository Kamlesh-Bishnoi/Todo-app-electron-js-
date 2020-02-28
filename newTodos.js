// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

// click on edit button to edit the current list item

var edit = document.getElementsByClassName("edit");

// Create a new list item when clicking on the "Add" button
function newElement(item) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";
  input.readOnly = true;
  input.value = item.title;
  input.id = item._id;
  li.appendChild(input);
  let span1 = document.createElement("SPAN");
  let editText = document.createTextNode("\u270D");
  span1.className = "edit";
  span1.onclick = function() {
    let input = document.getElementById(item._id);
    input.readOnly = false;
    input.focus();
  };
  
  input.onblur =() =>{
    let edit=document.getElementById(item._id).value;
    fetch("http://localhost:4050/api/update", {
      method: "PATCH",
      body: JSON.stringify({_id:item._id,title:edit}),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
       console.log(res.data)
      });

  };

  span1.appendChild(editText);
  li.appendChild(span1);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    fetch("http://localhost:4050/api/delete", {
      method: "DELETE",
      body: JSON.stringify({ _id: item._id }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json()) // or res.json()
      .then(res => console.log(res));
  };
  span.appendChild(txt);
  li.appendChild(span);
}
function detail() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }
  console.log("inpuutut", inputValue);
  fetch("http://localhost:4050/api/create", {
    method: "POST",
    body: JSON.stringify({ title: inputValue }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(res => {
      this.newElement(res.data);
    });
}
