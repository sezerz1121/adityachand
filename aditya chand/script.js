$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }


        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.sticky-icon').addClass("show");
        } else {
            $('.sticky-icon').removeClass("show");
        }




    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.stick-icon').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooty-h scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });




    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Level Designer", "Environment Artist ", "3D Modeller", "3D Artist", "3D Cinematics Designer"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Level Designer", "Environment Artist ", "3D Modeller", "3D Artist", "3D Cinematics Designer"],

        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,
        autoplayHoverPause: true,
        interval: 100,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 7,
                nav: false
            }
        }
    });



    // var $root = $('html, body');

    // $('a[href^="#"]').click(function () {
    //     $root.animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);

    //     return false;
    // });







    // Add a class to the sticky icon when scrolling down
    window.onscroll = function() {
        var icon = document.getElementById('sticky-icon');

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          icon.classList.add('scrolling');
        } else {
          icon.classList.remove('scrolling');
        }
      };

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      

});


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ed143d",

];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
