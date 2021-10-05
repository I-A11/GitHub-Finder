// Search input
const searchUser = document.querySelector("#searchUser");

//Search input event listener

searchUser.addEventListener("keyup", (e) => {
  //Get input text
  console.log(e.target.value);
});
