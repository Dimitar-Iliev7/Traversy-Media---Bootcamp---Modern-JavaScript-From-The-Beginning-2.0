function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 6000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
});
