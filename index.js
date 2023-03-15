function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const currentLeft = parseInt(dodger.style.left);
    if (currentLeft < 360) {
      dodger.style.left = `${currentLeft + 4}px`;
    }
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  


