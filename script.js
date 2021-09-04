var count = 0;
var countButton = document.getElementById("btn");
var displayCount = document.getElementById("display");
countButton.onclick = function () {
  count++;
  displayCount.innerHTML = count;
};
