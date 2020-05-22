var colorInput = prompt("Please enter your favorite color!");


colorFunction = () => {
    var colorSpan = document.getElementById("span");
    colorSpan.innerText = colorInput;
  
    colorSpan.addEventListener("mouseover", function () {
        colorSpan.style.color = colorInput;
});
  
  
colorSpan.addEventListener("mouseout", function () {
     colorSpan.style.color = "black";
});
}