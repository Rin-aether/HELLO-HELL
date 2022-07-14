let speed = 500;
$("#hidari").click(function(){
	$("html,body").animate(
	{scrollTop:$('#T04').offset().top - 20},speed);
});
$("#center").click(function(){
	$("html,body").animate(
		{scrollTop:$('#T01').offset().top - 100},speed);
});
$("#migi").click(function(){
	$("html,body").animate(
		{scrollTop:$('#T03').offset().top - 120},speed);
});

setTimeout(function(){
  $(".cloud3,.cloud4").show();
 },500);

$(function() {
    $('#slider').slick({
      autoplay: true,
      slidesToShow: 3,
	    slidesToScroll: 3,
	    prevArrow: '<span class="material-symbols-outlined usiro">arrow_back_ios</span>',
      nextArrow: '<span class="material-symbols-outlined mae">arrow_forward_ios</span>',
      responsive:[
        {
          breakpoint: 600,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }); 
  });

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

  function AboutAnime(){
    var scroll = $(window).scrollTop();
    if (scroll >= 20 && scroll < 130){//最初のスクロール
    $('#back img').css({'left':'70%' ,'opacity':'0'});
    $('#sun,#bat,#cloud1,#cloud2').css({'top':'-10%' ,'opacity':'0'});
    $('#hidari').removeClass('menu-hidari').addClass('move-hidari');
    $('#migi').removeClass('menu-migi').addClass('move-migi');
    $('#center').removeClass('menu-center').addClass('move-center');
    $('#scroll-wrap,#zatu-wrap').fadeOut(200);
    }else if (scroll >= 950){//centerだけ
      $("#center").removeClass('move-center').addClass('stop-center');
    }else if(scroll >= 130 && scroll <950){
      $('.move-center').css('transition','all 0s');
      $("#center").removeClass('stop-center').addClass('move-center');
    }else{//戻るとき
      $('.move-center').css('transition','all .5s');
      $('#center').removeClass('move-center').addClass('menu-center');
      $('#migi').removeClass('move-migi').addClass('menu-migi');
      $('#hidari').removeClass('move-hidari').addClass('menu-hidari');
      $('#back img').css({'left':'49%' ,'opacity':'1'});
      $('#sun').css({'top':'18%' ,'opacity':'1'});
      $('#bat').css({'top':'26%' ,'opacity':'1'});
      $('#cloud1').css({'top':'22%' ,'opacity':'1'});
      $('#cloud2').css({'top':'21%' ,'opacity':'1'});
      $('#scroll-wrap,#zatu-wrap').fadeIn(200);
    }
  }
function cloudAnime(){
  var scroll = $(window).scrollTop();
  if (scroll >= 800){
  $('#cloud1-ano,#cloud2-ano').addClass('cloud-add');
  $('#c-pagetop').removeClass('RightMove').addClass('LeftMove');
  }else{
  $('#cloud1-ano,#cloud2-ano').removeClass('cloud-add');
  if($('#c-pagetop').hasClass('LeftMove')){
    $('#c-pagetop').removeClass('LeftMove').addClass('RightMove');
  }
  }
}
var windowWidth = $(window).width();
var windowSm = 600;
if (windowWidth <= windowSm) {
//横幅600px以下（スマホ）に適用させるJavaScriptを記述
} else {
//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
$(window).scroll(function () {
  AboutAnime();
  cloudAnime();
});
}
  
  $('#c-pagetop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);//ページトップスクロールの速さ
    return false;
});

$(function() {
  $(".inview_re").on("inview",function(event,isInView,visiblepartX,visiblepartY) {
      if(isInView){
        $(this).stop().addClass("is-show");
      }
      else{
        $(this).stop().removeClass('is-show');
      }
    });
  });
// onceは一回だけ
let once = false;
	window.addEventListener('scroll', function () {
			// ターゲットの画面トップからの距離
		taeget_position = document.querySelector('#target').getBoundingClientRect().top;
		// 画面トップからの距離が画面の高さより小さければ実行する
			if (taeget_position <= window.innerHeight && once !== true) {
				once = true;
        $('#move-radon').addClass('move-radon');
			}
	});
let once2 = false;
	window.addEventListener('scroll', function () {
			// ターゲットの画面トップからの距離
		taeget_position2 = document.querySelector('#target2').getBoundingClientRect().top;
		// 画面トップからの距離が画面の高さより小さければ実行する
			if (taeget_position2 <= window.innerHeight && once2 !== true) {
				once2 = true;
        $('#move-seren').addClass('move-seren');
			}
	});
  //////////////////apng//////////////////////////////
APNG.ifNeeded().then(function () {
	var images = document.querySelectorAll(".apng-image");
	for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
	});