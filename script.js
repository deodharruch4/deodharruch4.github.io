document.addEventListener("DOMContentLoaded", function() {
    // Navigation from home page to earrings page
    /*const earringsLink = document.getElementById("earrings-link");
    if (earringsLink) {
      earringsLink.addEventListener("click", function() {
        window.location.href = "earrings.html"; // Navigate to earrings page
      });
    }
  
    // Navigation from home page to rings page
    const ringsLink = document.getElementById("rings-link");
    if (ringsLink) {
      ringsLink.addEventListener("click", function() {
        window.location.href = "rings.html"; // Navigate to rings page
      });
    }
  */
    // Navigation from any page to wishlist page
    const wishlistLink = document.getElementById("wishlist-link");
    if (wishlistLink) {
      wishlistLink.addEventListener("click", function() {
        window.location.href = "wishlist.html"; // Navigate to wishlist page
      });
    }
  
    // Navigation from product page to login page after clicking Buy Now
    const buyNowBtn = document.getElementById("buy-now-btn");
    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", function() {
        window.location.href = "login.html"; // Navigate to login page
      });
    }
  
    // Navigation from login page to checkout page after signing in
    const signInBtn = document.getElementById("sign-in-btn");
    if (signInBtn) {
      signInBtn.addEventListener("click", function() {
        window.location.href = "checkout.html"; // Navigate to checkout page
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const earringsLink = document.getElementById("earrings-link");
    const ringsLink = document.getElementById("rings-link");
  
    earringsLink.addEventListener("click", function(event) {
      console.log("Earrings link clicked");
    });
  
    ringsLink.addEventListener("click", function(event) {
      console.log("Rings link clicked");
    });
  });
  