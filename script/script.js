


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
       location.href = "checkOutTreeFounds.html";
}

function changeImageHelthy() {
       location.href = "checkOutTreeShears.html";
}

function submit() {
  var test = 0;
location.href = "index.html";
image.src = "images/LemonTree.svg";
}
