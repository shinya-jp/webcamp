$(function() {
	// id名と要素名で指定する。クリック後と指定する
  $('#back a').on('click',function(event){
  	// ページ全体に対して実行する。animateはjqueryの関数
    $('body, html').animate({
      scrollTop:0
    // 数値でもスクロールの速さを指定できる
    }, 'fast');
    // aタグの機能を無効化する
    event.preventDefault();
  });
});