const info = document.querySelector('#information');
const name = document.querySelector('#name');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

function save() {
  let nameVal = name.value;
  let titleVal = title.value;
  let contentVal = content.value;

  const value = {
    name : nameVal,
    title : titleVal,
    content : contentVal
  }

  const data = JSON.stringify(value);
  localStorage.setItem("data", data);
}

function printData() {
  console.log(localStorage.getItem("data"));
}

info.addEventListener("submit", save);
