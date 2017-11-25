

function myFunction() {
    if( document.getElementById("imgClickAndChange").src== "https://fiahoglund.github.io/Seed.svg")
    {
      //ändra bilden till trädet
      document.getElementById("imgClickAndChange").src = "leaf.png";

      //länka till html sidan där man sätter upp sitt konto
      window.open("D:\Marie\work\casoma_grow\fiahoglund.github.io\setUpPage");

    }
    else
    {
      //Länka till html sidan för att kolla på kontot man redan har
      window.open("D:\Marie\work\casoma_grow\fiahoglund.github.io\checkOutTree");
    }
}
