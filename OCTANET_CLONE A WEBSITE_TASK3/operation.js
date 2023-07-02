var bag = document.getElementById("bag-icon");
var bagItems = document.getElementById("bag-items");
var body = document.getElementById("body");

bagItems.style.display = "none";

bag.addEventListener("click", () => {
  if (bagItems.style.display === "none") {
    bagItems.style.display = "block";
  } else {
    bagItems.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function() {
 
  var navLinks = document.querySelectorAll(".navbar ul li a");


  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {

      event.preventDefault();

    
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });

      
      this.classList.add("active");
    });
  });

   
  var iphone12LearnMoreLink = document.querySelector(".iphone12-links a:first-child");
  var iphone12BuyLink = document.querySelector(".iphone12-links a:last-child");


  iphone12LearnMoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    console.log("Learn more about iPhone 12");
  });

  iphone12BuyLink.addEventListener("click", function(event) {
    event.preventDefault();
  
    console.log("Buy iPhone 12");
  });
});
