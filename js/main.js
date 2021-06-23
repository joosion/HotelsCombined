$(document).ready(function(){
    $(".all_btn").on("click",function() {
      console.log("play")
      $(".nav").stop().animate({
        "left":0
      })
    })

    $(".back").on("click", function() {
        $(".nav").stop().animate({
            "left" : "-100%"
        })
    })
    $(".track").slick({
        centerMode : true,
        centerPadding : "330px",
        infinite: true,
        speed: 1000,
        autoplay: true,
        dots: true,
        responsive: [{  
            breakpoint: 750,
            settings: {centerPadding : "10px",},
            breakpoint: 1200,
            settings: {centerPadding : "50px",}
     
        }]
    });
    // $('.track2').slick({
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 7,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
    $(".mtrack").slick({
        centerMode : true,
        centerPadding : "170px",
        infinite: true,
        Arrow :false
    });
    $("con2-1 button").on("click",function(){
        videoplay
    })


})
