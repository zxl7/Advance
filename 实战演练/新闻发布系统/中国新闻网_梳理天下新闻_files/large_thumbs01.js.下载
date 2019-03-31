/* http://jamesvec.com
   large thumbs v2
   Written by james vecchio (jamesvec[at]gmail.com) June 2010.
   Feel free to use this on any project. 
   I would love to see what people do with it, so drop me a line
   if you use it.
   */


//loops to add classes and identifiers
$(document).ready(function(){
		var mainImg = "";
	var showImg = "";
	var contWidth =351;// $('#photo_wrap').height();
	var groups = $('.group ul').size();
	
	var totalWidth = groups*contWidth;
	var sectCount = 0;
function layershowy(){
	
	
	var _show = null;
	   var _hideTimer = null;
	  
		var lione = $('#lione');
		var fast_navbox=$('#fast_navbox');
		
		   fast_navbox.bind('mouseenter',function() {
				if (_hideTimer != null)
					clearTimeout(_hideTimer);
			});
			fast_navbox.bind('mouseleave', function() {
				fast_navbox.hide('fast');
				$('#thumbs').animate({top: '+='+(sectCount*contWidth)+'px'},{duration: 'slow', easing: 'swing'});
				sectCount=0;
				
	 backToTopFun = function() {
        var stback1 = $(document).scrollTop(), winh = $(window).height();
        (stback1>0)? $(".index_layer_back").show(): $(".index_layer_back").hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
			var indexlayer_height=$(".index_layer").height();
			
				 $(".index_layer_back").css("top", stback1 + winh - 440); 
			
					
             
        }
    };
	$(window).bind("scroll", backToTopFun);
    backToTopFun(); 
	
	
	
	
	
			});
			lione.mouseout(function() {
				if (_show != null) {
					clearTimeout(_show);
				}
				_hideTimer = setTimeout(function() {
					fast_navbox.hide('fast');
					
					$('#thumbs').animate({top: '+='+(sectCount*contWidth)+'px'},{duration: 'slow', easing: 'swing'});
					$('#next a').css('display','inline-block');
					$('#prev a').css('display','none');
					sectCount=0;
					
					
					 backToTopFun = function() {
        var stback1 = $(document).scrollTop(), winh = $(window).height();
        (stback1>0)? $(".index_layer_back").show(): $(".index_layer_back").hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
			var indexlayer_height=$(".index_layer").height();
			
				
				$(".index_layer_back").css("top", stback1 + winh - 440);   
					
             
        }
    };
	$(window).bind("scroll", backToTopFun);
    backToTopFun(); 
	
	
				}, 200);
			});
			lione.mouseover(function() {
				if (_show != null) {
					clearTimeout(_show);
				}
				_show = setTimeout(function() {
					
					fast_navbox.show('fast');
					$('#thumbs').animate({top: '+='+(sectCount*contWidth)+'px'},{duration: 'slow', easing: 'swing'});
					$('#next a').css('display','inline-block');
					$('#prev a').css('display','none');
					sectCount=0;
					
					 backToTopFun = function() {
        var stback1 = $(document).scrollTop(), winh = $(window).height();
        (stback1>0)? $(".index_layer_back").show(): $(".index_layer_back").hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
			var indexlayer_height=$(".index_layer").height();
			
				
				$(".index_layer_back").css("top", stback1 + winh - 5);   
					
             
        }
    };
	$(window).bind("scroll", backToTopFun);
    backToTopFun(); 
	
					
				}, 200);
			});
	
	
		};
		
		
			
				$(".group li a").each(function(index, element){$(element).attr("rel", 'image'+index);});
	
	//variables

	//alert(groups);
	//slider if needed
	 $('#thumbs').css('height',totalWidth);
	 
	 //if there are more than 6 items scroll
	 if(groups>1){
		 $('#next a').css('display','inline-block');
		 }
		
		 $('#prev a').click(function(){
                if(sectCount >0){
                    $('#thumbs').animate({top: '+='+contWidth+'px'},{duration: 'slow', easing: 'swing'});
					//alert($('#thumbs').css("top"));
                    sectCount=sectCount-1;
					//if there is no more sections to show hide arrow
                    if(sectCount==groups){
					$('#next a').css('display','none');
					}else{
					$('#next a').css('display','inline-block');
					}
               	}
				
					if (sectCount ==0) {
					$('#prev a').css('display','none');
					}else{
					$('#prev a').css('display','inline-block');
					}
                })
         $('#next a').click (function(){
                if(sectCount<groups-1){
                $('#thumbs').animate({top: '-='+contWidth+'px'},{duration: 'slow', easing: 'swing'})
                sectCount = sectCount+1;
					//if there is no more sections to show hide arrow
					//alert(sectCount);
				   if(sectCount==groups-1){
					$('#next a').css('display','none');
					}else{
					$('#next a').css('display','inline-block');
					}
					if (sectCount ==0) {
					$('#prev a').css('display','none');
					}else{
					$('#prev a').css('display','inline-block');
					}
                }
               
                });
			
			
		layershowy();
		
});
	
	