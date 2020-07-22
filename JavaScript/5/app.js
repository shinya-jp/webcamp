$(function(){
	$('.box1').show(1000)
	$('.box1').slideDown(function(){
		$('.box1').css({
			'background-color': '#0000ff',
			'width': '200px',
			'height': '100px'
		}).slideUp(1000);
	});
});