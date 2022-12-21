$('.cards').click(function(){
          $(this).toggleClass('flipped');
        });


        document.addEventListener("DOMContentLoaded", function(){
          window.addEventListener('scroll', function() {
              if (window.scrollY > 90) {
                document.getElementById('imagen').style.display = "none";
              } else {
                document.getElementById('imagen').style.display = "block";
              } 
          });
        });