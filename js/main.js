/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const date = document.querySelector(".date");
async function updateTimeAsync() {
  while (true) {
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
    }); // Adjust timeZone as needed
    date.innerHTML = formattedTime; // Or display it in a UI element

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Update every 1 second
  }
}

updateTimeAsync(); // Start the asynchronous time update
