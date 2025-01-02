document.addEventListener("click", () => {
  const bg = document.querySelector("h1"); // Ensure there's an <h1> element

  function ground() {
    console.log("First click");
  }

  if (bg) {
    bg.addEventListener("click", ground); // Add the event listener properly
  } else {
    console.error("No <h1> element found on the page.");
  }
});
