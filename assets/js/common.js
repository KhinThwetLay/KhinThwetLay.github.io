jQuery(function ($) {
  $(function () {
    var scroll_func = function () {
      $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, "slow", "swing");
      return false;
    };
    $(function () {
      $('a[href^="#"]').not('[href$="#"]').click(scroll_func);
    });
  });

  $(function () {
    $(window).scroll(function () {
      var winTop = $(this).scrollTop();
      //footer
      if (winTop > 200) {
        $(".pagetop").fadeIn();
      } else {
        $(".pagetop").fadeOut();
      }
    });
    $(document).on("click", ".pagetop", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

  /*===========================================================*/
  /*スクロールに連動した動き*/
  /*===========================================================*/
  function fadeAnime() {
    $(".fadeUpTrigger").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });

    // ぱたっ
    $(".flipLeftTopTrigger").each(function () {
      //flipLeftTopTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("flipLeftTop"); // 画面内に入ったらflipLeftTopというクラス名を追記
      } else {
        $(this).removeClass("flipLeftTop"); // 画面外に出たらflipLeftTopというクラス名を外す
      }
    });

    // ぱたっ
    $(".fadeLeftTrigger").each(function () {
      //flipLeftTopTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeLeft"); // 画面内に入ったらfadeLeftというクラス名を追記
      } else {
        $(this).removeClass("fadeLeft"); // 画面外に出たらflipLeftTopというクラス名を外す
      }
    });

    //txt-leftanime
    $(".leftAnime").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
      } else {
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });

    $(".fadeRightTrigger").each(function () {
      //fadeRightTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeRight"); // 画面内に入ったらfadeRightというクラス名を追記
      } else {
        $(this).removeClass("fadeRight"); // 画面外に出たらfadeRightというクラス名を外す
      }
    });

    // ボンッ

    $(".zoomInTrigger").each(function () {
      //zoomInTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("zoomIn"); // 画面内に入ったらzoomInというクラス名を追記
      } else {
        $(this).removeClass("zoomIn"); // 画面外に出たらzoomInというクラス名を外す
      }
    });

    // ヒュッ

    $(".zoomOutTrigger").each(function () {
      //zoomOutTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("zoomOut"); // 画面内に入ったらzoomOutというクラス名を追記
      } else {
        $(this).removeClass("zoomOut"); // 画面外に出たらzoomOutというクラス名を外す
      }
    });
  }
  // ページがスクロールされたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime(); //スクロールに連動した動きの関数を呼ぶ
  });
});
