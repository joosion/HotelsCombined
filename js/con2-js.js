$(document).ready(function () {
    var txtbox = function (id, main, sub) {
      if (id === "main") {
        return `
        <div class="txtbox" style="display:none;">
          <p class="txt1">${main}</p>
          <p class="txt2">${sub}</p>
        </div>
        `
      } else if (id === "tit") {
        return `
        <p style="display:none; position: absolute; top: 0; left:0;">${main}</p>
        `
      }
    }
  
    function mainTypoFading(num) { //메인 타이포 전환
      var k = Object.keys(contents); //arr
      for (var key in contents) {
        if (k[num] === key) {
          console.log(contents[key].title)
          var textAdd = txtbox("main", contents[key].mainText, contents[key].subText);
          var titAdd = txtbox("tit", contents[key].title);
          $(".text-area").append(textAdd);
          $(".imgbox .tit").append(titAdd);
        }
      }
  
      function runFading(sel) {
        $(`${sel}`).eq(0).stop().fadeOut(function () {
          $(`${sel}`).eq(1).siblings().remove();
          $(".imgbox .tit p").css("position", "unset");
        });
        $(`${sel}`).eq(1).fadeIn();
      }
  
      runFading(".txtbox");
      runFading(".imgbox .tit p");
    } //fn
  
    function thumbSlider(num) { //썸네일 슬라이더 전환
      var layer = `<div class="layer" style="position: absolute; top: 0; left: 0; width: 0; height: 100%; background-color: rgb(0, 174, 240)"></div>`
      var nxt = function (src) {
        return `<div class="next" style="position: absolute; top: 0; left: 0; width: 0; height: 100%; background-position: left top;background-image: url(Country/${src}); background-size: cover;"></div>`
      }
  
      var vdo = function (src) {
        return `<video muted looop style="position: absolute; top:0; left:50%;">
          <source src="Country/${src}" type="video/mp4">
        </video>
        `
      }
  
      var k = Object.keys(contents);
      for (var key in contents) {
        if (k[num] === key) {
          $(".imgbox").append(nxt(contents[key].imgSrc));
          $(".videobox").append(vdo(contents[key].vdoSrc));
        }
      }
  
      $(".imgbox").prepend(layer);
  
      $(".imgbox .layer").stop().animate({
        "width": "100%"
      }, 600, "easeInOutQuart")
      setTimeout(function () {
        $(".imgbox .next").stop().animate({
          "width": "100%"
        }, 600, "easeInOutQuart", function () {
          $(".imgbox").css("backgroundImage", $(".imgbox .next").css("backgroundImage"));
          $(".imgbox .next, .imgbox .layer").remove();
        })
      }, 300);
  
      $(".videobox video").eq(1).stop().fadeIn(800)
        .prev().stop().fadeOut(800, function () {
          $(".videobox").find("video").eq(0).remove();
        });
    } //fn
  
    function reviewSlider(num) {
      var card = function (idx) {
        return `
          <li>
            <a href="#">
              <div class="imgroom"><img src="Country/${idx.thumb}"></div>
              <p class="nickname">${idx.userName}</p>
              <p class="tit">${idx.title}</p>
              <p class="botmtxt">${idx.subs}</p>
              <p class="date">${idx.date}</p>
            </a>
          </li>
        `
      }
  
      // $("#wrap").append(slideset);
      var k = Object.keys(contents);
      for (var key in contents) {
        if (k[num] === key) {
          var reviews = contents[key].review;
          var nextReview = `
          <ul class="bottom next" style="opacity: 0; width: 100%; position: absolute; top: 0;left: 0"></ul>
          `
          $("div.review").append(nextReview);
  
          var reviewKey = Object.keys(reviews);
          for (var rv in reviews) {
            var reviewCard = card(reviews[rv]);
            $(".review .next").append(reviewCard);
          } //for
        } //if
      } //for
  
      $(".review .next").stop().animate({
        "opacity": 1
      }, 800).prev().stop().animate({
        "opacity": 0
      }, 800, function () {
        $(".review .next").css({
          "position": "relative"
        }).prev().remove();
        $(".review .next").removeClass("next");
      })
    } //fn
  
    function setSlick() {
      $('.track2').slick({
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 7,
        centerPadding: '10px',
        arrows: true,
        responsive: [{
          breakpoint: 768,
          settings: "unslick"
        }]
      });
  
    } //fn : slick setting
  
    function eSlickChange() {
      $(".track2").on("afterChange", function () {});
  
      $(".track2").on("beforeChange", function () {});
    }
  
    function clickSlide() {
      $(".track2 .slick-slide").on("click", function () {
        var i = $(this).attr("data-slick-index"); //idx
        var is = $(this).hasClass("slick-current");
        if (is) {
          mainTypoFading(i);
          thumbSlider(i);
          reviewSlider(i);
        }
      });
    }
  
    function swipeSlide() {
      $(".track2").on("swipe", function () {
        var i = $(".slick-current").attr("data-slick-index");
        var is = $(".slick-track").css("transition");
        if (is) {
          mainTypoFading(i);
          thumbSlider(i);
          reviewSlider(i);
        }
      })
    }
  
    function clickCtrlBtn() {
      $(".track2 .slick-arrow").on("click", function () {
        var i = $(".slick-current").attr("data-slick-index");
        var is = $(".slick-track").css("transition");
        if (is) {
          mainTypoFading(i);
          thumbSlider(i);
          reviewSlider(i);
        }
      })
    }
  
    function init() {
      setSlick();
      clickSlide();
      eSlickChange();
      clickCtrlBtn();
      swipeSlide()
    }
  
    init();
  })