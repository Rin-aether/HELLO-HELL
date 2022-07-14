var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');
var content2 = document.getElementById('content2');


//音声認識APIの使用
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var speech = new webkitSpeechRecognition();
//言語を日本語に設定
speech.lang = "ja";

btn.addEventListener( 'click' , function() {
    // ➀ボタンをクリックした時の処理
   // 音声認識をスタート
   speech.start();
   $('#black').fadeIn().animate({'opacity':0.7},550);


} );
//終了判定
speech.onnomatch = function(){
    $('#black').fadeOut().animate({'opacity':0},550);
};

speech.addEventListener( 'result' , function( e ) {
    // ➁音声認識した結果を得る処理
$('#content').show();
$('#content2').show();
// 認識された「言葉」を、変数「text」に格納
var text = e.results[0][0].transcript;
// 認識された「言葉(text)」を、表示用のdivタグに代入する
 content.textContent = text;
 content2.textContent = text;
 switch(text){
    case "イスラ":
    getIsura();
    break;

    case "クロシェット":
    getClo();
    break;

    case "ファントム":
    getPhan();
    break;

    default:
    setTimeout(function(){
    content.textContent = "";
    content.style.display = "none";
    content2.textContent = "";
    content2.style.display = "none";
    $('#black').fadeOut().animate({'opacity':0},550);},900);
    break;
 }
} );

function getIsura() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './isura.html';  
    },1000); 
}
function getClo() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './clo.html';  
    },1000); 
}
function getPhan() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './phantom.html';  
    },1000); 
}

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

  $(function() {
    $('#slider').slick({
      autoplay: true,
      slidesToShow: 1,
	    slidesToScroll: 1,
	    prevArrow: '<span class="material-symbols-outlined usiro">arrow_back_ios</span>',
      nextArrow: '<span class="material-symbols-outlined mae">arrow_forward_ios</span>',
    }); 
  });

  ////////////ページ読み込み時/////////////////
WebFont.load(
    {custom:
      {
        families: ['DotGothic16']
      },loading: function(){},
      active: function()
      {
        $('.voice-btn').css('opacity', '1');
      },inactive: function(){
        //console.log('失敗したとき');
      }
  });