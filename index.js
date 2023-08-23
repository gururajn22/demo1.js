const text = document.getElementById("input");
const btn = document.getElementById("btn1");
const test = localStorage.getItem("test")
  ? JSON.parse(localStorage.getItem("test"))
  : [];
function btnClick() {
    test.push({
    text: text.value,
  });
  localStorage.setItem("test", JSON.stringify(test));
  text.value = "";
}
btn.addEventListener("click", btnClick);


console.log(JSON.parse(localStorage.getItem("test")));

const output = () => {
  const droparea = document.querySelector(".droparea");
  const active = () => droparea.classList.add("red-border");
  const inactive = () => droparea.classList.remove("red-border");
  const prevents = (e) => e.preventDefault();

  ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, prevents);
  });

  ["dragenter", "dragover"].forEach((evtName) => {
    droparea.addEventListener(evtName, active);
  });

  ["dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, inactive);
  });

  droparea.addEventListener("drop", handleDrop);

  const storedData = localStorage.getItem("data");
  const fileArray = storedData ? JSON.parse(storedData) : [];

  console.log(fileArray);
};

document.addEventListener("DOMContentLoaded", output);

const handleDrop = (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  const fileArray = JSON.parse(localStorage.getItem("data")) || [];

  for (let i = 0; i < files.length; i++) {
    fileArray.push(files[i]);
  }

  localStorage.setItem("data", JSON.stringify(fileArray));
};
