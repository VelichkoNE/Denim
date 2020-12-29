

$(function() {
	
	var w = $('.green-button').width();

	function WidthAndHeight(element) {
		var ClassName = "."+element;
		var w = $(ClassName).width();
		var h = $(ClassName).height();
		$('h1').text('Ширина:' + w + 'Высота:' + h);
	}
	function elementOut (element, time) {
		
		if (time>5000||time<1000||isNaN(time)) {
			return false;
		}
		else {
			var ClassName = "."+element;
			$(ClassName).fadeOut(time).fadeIn(time);
		}
	}

	function NewAttr (element, NewAttr, NewValue) {
		var ClassName = "."+element;
		$(ClassName).attr(NewAttr, NewValue);
	}
	
		$('.about-list-item-title').animate({
			'font-size':'20px',
			'margin':'40px'
		},5000,function(){
		}).before('<span class="new_block">Прывет, я новый блок до тайтла</span>');

		$('.about-list-item').append('<p>Я аппенд</p>').prepend('<p>А Я приппенд</p>')

		$('.package-ul div img').each(function(){
			if($(this).attr('src')=='книга.png') {
				$(this).fadeOut(5000);
			}
		});
		var wrap = $('.wrap').clone();
		$('.promo-wrapper').append(wrap);

		$('img[alt], a, div'); /* выборка элементов, через запятую просто. В квадратных скобках - по наличию атрибута (если он есть)*/
		
		/* исчезание элементов при клике $('a, p, img, li, h1, h2').click(function() {
				$(this).fadeOut(1000);
			});*/

		$('.promo').fadeOut(5000);
});


