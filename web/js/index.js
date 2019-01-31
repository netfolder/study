/* 전체메뉴 */
//
$(".tit .btn").click(function(e){
	e.preventDefault();
	$("#cont_nav").slideToggle();	
	$(this).toggleClass("on");	
})


/* 배너 */
$(".ban").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay:true,
	autoplaySpeed : 3000,
	dots:true
});


/* 텝메뉴 */
$(".tab_menu li").each(function() {	
	$(this).click(function(e){
		e.preventDefault()		
		$(".tab_menu li").removeClass("active")
		$(this).addClass("active")		
	});	
	$(this).focusin(function() {
		$( this ).click()
	});		
});


/* 갤러리 */
$(".gallery_img").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed : 3000,
	dots:false,
	arrows:false
});
$(".gb_icon1").click(function(e){
	e.preventDefault();
	$(".gallery_img").slick('slickPlay');
})
$(".gb_icon2").click(function(e){
	e.preventDefault();
	$(".gallery_img").slick('slickPause');
})
$(".gb_icon3").click(function(e){
	e.preventDefault();
	$(".gallery_img").slick('slickPrev');
})
$(".gb_icon4").click(function(e){
	e.preventDefault();
	$(".gallery_img").slick('slickNext');
})


/* 레이어팝업 */
$(".layer").click(function(e){
	e.preventDefault();
	$("#layer").css("display" , "block")
})
$("#layer .close").click(function(e){
	e.preventDefault();
	$("#layer").css("display" , "none")
})

/* 윈도우팝업 */
$(".window").click(function(e){
	e.preventDefault();
	//window.open("파일명","팝업이름","옵션설정")
	//옵션 : left, top , width , height , status , toolbar , location , menubar , scrollbars , fullscreen
	window.open("popup.html" , "popup01" , "width=800, height=500, left=50, top=50, scrollbars=0, toolbar=0 ,menubar=0")
	
})

/* 라이트박스 */
$(".lightgallery").lightGallery(); 











