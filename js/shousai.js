$(".openbtn").click(function () {
    $(this).toggleClass('active');
      $("#g-nav").toggleClass('panelactive');
      $(".circle-bg").toggleClass('circleactive');
      setTimeout(function(){
        $("#logo").toggleClass('logo-fil');
       },150);
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');
      $("#g-nav").removeClass('panelactive');
      $(".circle-bg").removeClass('circleactive');
  });