var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/tsukutyuu1.jpg','images/tsukutyuu2.jpg','images/tsukutyuu3.jpg'], 
        interval: 5000,
        loop: true,
    });
    $(window).scroll(function ()
    {
        $(".fadein").each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 200)
            {
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });

      $(".fadein2").each(function() {
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200)
            {
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
    });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '20%',
  });
  $('.more-button').on('click',function()
{
if($('.open-box').is(':hidden'))
{
 $('.open-box').slideDown();
 $(this).text('close');
//  $(this).css('background-color', '#808080');
} else
{
    $('.open-box').slideUp();
    $(this).text('more');
    // $(this).css('background-color', '#fabb51');
}
});
$(".modal-button").modaal();

$('nav a[href^="#"').click(function(){
    var adjust = 0;
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
});
});

const imageDE = document.getElementById('images/toukadenden.png'); // ロゴ画像

// スタートボタンをクリックしたら
imageDE.addEventListener('click', () => {
  // 画像を左端から200px右に動かす
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0)'}, // 開始時の状態（左端）
      { transform: 'translateX(2000px)' } // 終了時の状態（左端から200pxの位置）
    ], 
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 10000, // 再生時間（1000ミリ秒）
    },
  );
});

var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']);//重ねる波線の色設定
    
  
    // 各キャンバスの初期化
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波線を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.8, 3, 0);
  drawWave(canvas, color[1], 0.5, 4, 0);
  drawWave(canvas, color[2], 0.3, 1.6, 0);
  drawWave(canvas, color[3], 0.2, 3, 100);
  drawWave(canvas, color[4], 0.5, 1.6, 250);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
    context.strokeStyle = color;//線の色
  context.lineWidth = 1;//線の幅
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke(); //線
}




}
/*
     FILE ARCHIVED ON 08:12:27 Jul 23, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:44:00 Feb 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.706
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 471.249
  LoadShardBlock: 956.898 (3)
  PetaboxLoader3.datanode: 619.237 (5)
  PetaboxLoader3.resolve: 1499.502 (3)
  load_resource: 1425.077
  loaddict: 189.795
*/