// JavaScript Document

//window.onload = function() {
//alert("load over");
//}

//var flag = false;
//window.onload = function() {
//if (flag) {return;}
//flag= true;
//alert("load over");
//}


function focusBox(o){
	//alert(00);
	if(!o) return;
	//alert(11);
	var w=320, $o=$('#'+o),i=0,l=0;arr= [],t= null,
		$infoLi = $o.find('.banner_info li'), len= $infoLi.length*2,
		$ul=$o.find('.banner_pic>ul');
	$ul.append($ul.html()).css({'width':len*w, 'left': -len*w/2});
	$infoLi.eq(0).addClass('current');
	//add banner_pages element
	arr.push('<div class="banner_pages"><ul>');
	$infoLi.each(function(i){
		if(i==0){
			arr.push('<li class="current"><span>'+ (i+1) +'</span></li>');
		}else{
			arr.push('<li><span>'+ (i+1) +'</span></li>');
		}
	});
	arr.push('</ul></div>');
	$o.append(arr.join(''));
	var $pagesLi = $o.find('.banner_pages li');
	//mouse
	$pagesLi.children('span').click(function(){
		var p = $pagesLi.index($o.find('.banner_pages li.current'));
		i = $pagesLi.children('span').index($(this));
		if(i==p) return;
		l = parseInt($ul.css('left')) + w*(p-i);
		addCurrent(i,l);
		return false;
	})
	$o.children('a.btn_prev').click(function(){
		i = $pagesLi.index($o.find('.banner_pages li.current'));
		(i==0)? i=(len/2-1):i--;
		l = parseInt($ul.css('left')) + w;
		addCurrent(i,l);
		return false;
	})
	$o.children('a.btn_next').click(function(){
		i = ($pagesLi.index($o.find('.banner_pages li.current'))+1)%(len/2);
		l = parseInt($ul.css('left')) - w;
		addCurrent(i,l);
		return false;
	})
	//auto focus
	t = setInterval(init,8000);
	$o.hover(function(){
		clearInterval(t);
	}, function(){
		t = setInterval(init,8000);
	});
	function init(){
		$o.children('a.btn_next').trigger('click');
	}
	//add focus
	function addCurrent(i,l){
		if($ul.is(':animated')) return;
		$ul.animate({'left':l},500,function(){
			$o.children('.banner_count').text(i+1);
			$infoLi.not($infoLi.eq(i).addClass('current')).removeClass('current');
			$pagesLi.not($pagesLi.eq(i).addClass('current')).removeClass('current');
			if(l== (1-len)*w){
				$ul.css({'left': (1-len/2)*w});
			}else if(l== 0){
				$ul.css({'left': -len*w/2});
			}
		});
	}
}

$(function(){
	focusBox('kakaFocus');
})
