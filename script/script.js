


function changeImage() {
var image =  document.getElementById("imgClickAndChange");
  if (image.getAttribute('src') == "images/Seed.svg")
   {
       image.src = "images/LemonTree.svg";

       location.href = "setUpPage.html";
       //location.href = "checkOutTree.html";

   }
   else
   {
       image.src = "images/LemonTree.svg";
       location.href = "checkOutTree.html";
   }
}

function changeImageRotten() {
var image2 =  document.getElementById("avocadoClick");

  if (image2.getAttribute('src') == "images/Seed.svg")
   {
       image2.src = "images/DyingTree.svg";
   }
}

function changeImageHelthy() {
var image1 =  document.getElementById("orangeClick");

  if (image1.getAttribute('src') == "images/Seed.svg")
   {
       image1.src = "images/HealthyTree.svg";
   }
}

function submit() {
  var test = 0;
location.href = "index.html";
image.src = "images/LemonTree.svg";
}
