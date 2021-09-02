$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})



  let x = document.getElementById("replace");
  let y = document.getElementById('backColor');
  let z = document.getElementById('iconu');

  rename = () => {
  if (x.innerHTML === "Follow") {
    x.innerHTML = "Following";
    x.style.color = '#fff';
    y.style.backgroundColor = '#d4054c';
    z.style.color = "#fff";
  } else {
    x.innerHTML = "Follow";
    x.style.color = '#d4054c';
    y.style.backgroundColor = '#fff';
    z.style.color = "#d4054c";
  }
}
