document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  //Conditionals go here
  if (day === "monday" || day === "tursday") {
    console.log("class day");
  } else if (day === "sonday" || day === "satrday") {
    console.log("weekend");
  } else {
    console.log("boring  day");
  }
}
