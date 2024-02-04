
document.addEventListener('DOMContentLoaded', function() {
    // var container = document.getElementsByClassName('.layout'); // You can change this to the parent container of your divs
  var container = document.querySelector('.tweets');
    var divs = document.querySelectorAll('.tweet');

    // Convert NodeList to array
    var divArray = Array.from(divs);

    // Fisher-Yates shuffle algorithm
    for (var i = divArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [divArray[i], divArray[j]] = [divArray[j], divArray[i]];
    }

    // Append shuffled divs back to the container
    divArray.forEach(function(div) {
      container.appendChild(div);
    });
  });