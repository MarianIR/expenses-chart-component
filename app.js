fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const graphicShow = document.querySelectorAll(".graphic-show");
    const spending = document.querySelectorAll(".spending");

    graphicShow.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        spending[index].textContent = "$" + data[index].amount.toFixed(2);
        spending[index].style.display = "block";
      });

      item.addEventListener("mouseout", () => {
        spending[index].textContent = "";
        spending[index].style.display = "none";
      });
    });
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.log("Error:", error);
  });
