const saveBtn = document.getElementById("saveUser");
const deleteBtn = document.getElementById("deleteUser");
const showResult = document.getElementById("userNameRecorder");
const userForm = document.querySelector("form");
const showedTimer = document.getElementById("contatore");
console.log(showedTimer);
window.addEventListener("load", () => {
  const savedUserName = localStorage.getItem("userName");
  if (savedUserName) {
    showResult.innerText = savedUserName;
  }
});

userForm.onsubmit = function (e) {
  e.preventDefault();
  const userInput = document.getElementById("uname");
  localStorage.setItem("userName", userInput.value);
  showResult.innerText = userInput.value;
  userForm.reset();
};

deleteBtn.addEventListener("click", () => {
  userForm.reset();
  localStorage.removeItem("userName");
  showResult.innerText = "";
});

const updateTimer = function () {
  let time = 0;
  setInterval(function () {
    time++;
    showedTimer.innerText = time;
    sessionStorage.setItem("time", time);
  }, 1000);
};
updateTimer();
