// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.textContent = "You clicked the button! 🎉";
  });
});