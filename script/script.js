


function changeImage() {
var image =  document.getElementById("imgClickAndChange");
  if (image.getAttribute('src') == "images/Seed.svg")
   {
       image.src = "images/LemonTree.svg";

       location.href = "setUpPage.html";

   }
   else
   {
       image.src = "images/LemonTree.svg";
       location.href = "checkOutTree.html";
   }
}

function changeImageOnly() {
var image1 =  document.getElementById("avocadoClick");
var image2 =  document.getElementById("orangeClick");

  if (image1.getAttribute('src') == "images/Seed.svg")
   {
       image1.src = "images/LemonTree.svg";
   }
   else if(image2.getAttribute('src') == "images/Seed.svg")
   {
       image2.src = "images/LemonTree.svg";
   }
   else
     {
       image2.src = "images/LemonTree.svg";
       image1.src = "images/LemonTree.svg";
     }
}
