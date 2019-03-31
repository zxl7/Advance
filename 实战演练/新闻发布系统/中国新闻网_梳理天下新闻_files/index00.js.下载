// JavaScript Document
	


	
		
		$(document).ready(function(){
			 $("#lione").mouseover(function(){
			 
			    $("#lione").removeClass("one");
			    $("#lione").addClass("onesel");
			});
			 $("#litwo").mouseover(function(){
			 
			    $("#litwo").removeClass("two");
			    $("#litwo").addClass("twosel");
			});
			
			 $("#lione").mouseout(function(){
			 
			    $("#lione").addClass("one");
			    $("#lione").removeClass("onesel");
			});
			 $("#litwo").mouseout(function(){
			 
			    $("#litwo").addClass("two");
			    $("#litwo").removeClass("twosel");
			});
			 var ullist = $('ul.fast_guidul li');
			
		    ullist.each(function(index) {
				var cc = $(this);
				
				$("ul.fast_guidul li:even").css("background","#f1f1f1");
				
				});
		 
		});
/*navlist*/

$(document).ready(function(){
	
	  
		 $("#kakaFocus").mouseover(function(){
			
	  	   $("#lrbt_show1").show();
		   $("#lrbt_show2").show();
		});
		$("#kakaFocus").mouseout(function(){
	  	   $("#lrbt_show1").hide();
		   $("#lrbt_show2").hide();
		});
	 
	});
 
		
/*topnav*/
 function topnav(){
    var text1=$('#nav_zhankai').html();
	var text='';
	
	if(text1 == text){
		
		$('#nav_zhankai').html(',');
		$('#nav_zhankai').removeClass('index_icon9');
		$('#nav_zhankai').addClass('index_icon7');
		$('.nav_boxcon').css('height','37px');
	}
	else{
		$('#nav_zhankai').html('');
		
		$('#nav_zhankai').addClass('index_icon9');
		$('#nav_zhankai').removeClass('index_icon7');
		$('.nav_boxcon').css('height','74px');
	}
}

/*links*/
 function modify(){
	
    var md_text1=$('#zhankai').html();
	var md_text='展开全部';
	
	if(md_text1 == md_text){
		$('#zhankai').html('收起全部');
		$('#zhankai').removeClass('zhankai');
		$('#zhankai').addClass('shouqi');
		$('#links').css('height','auto');
		$('.links').css('height','auto');
		
	}
	else{
		$('#zhankai').html('展开全部');
		$('#zhankai').addClass('zhankai');
		$('#zhankai').removeClass('shouqi');
		$('#links').css('height','74px');
		$('.links').css('height','74px');
	}
}

/*底部滑过*/
	
	
	
	 $(document).ready(function(){
	  function milismall(){
	   var _show = null;
	  var _hideTimer = null;
	  var planItems = $('div.chartlet_box ul li');
		planItems.each(function(index) {
	
			var li = $(this);
			var div = li.find('div.layerbox');
			div.css("display","none");
			li.bind('mouseenter',function() {
				if (_show != null) {
					clearTimeout(_show);
				}
				_show = setTimeout(function() {
					$('ul._commuity_nav li div.conbox').hide();
					
					div.show('fast');
					
				}, 200);
				});
			  li.bind('mouseleave', function() {
					if (_show != null) {
					clearTimeout(_show);
				}
				_hideTimer = setTimeout(function() {
					div.hide('fast');
					
				}, 200);
				});
			});
	  };
	  milismall();
	  
	  var _show = null;
	  var _hideTimer = null;
	  var planItems = $('ul.chartlet_big li');
		planItems.each(function(index) {
	
			var li = $(this);
			var div = li.find('div.layerbox');
			div.css("display","none");
			li.bind('mouseenter',function() {
				if (_show != null) {
					clearTimeout(_show);
				}
				_show = setTimeout(function() {
					$('ul._commuity_nav li div.conbox').hide();
					
					div.show('fast');
					
				}, 200);
				});
			  li.bind('mouseleave', function() {
					if (_show != null) {
					clearTimeout(_show);
				}
				_hideTimer = setTimeout(function() {
					div.hide('fast');
					
				}, 200);
				});
			});
	 
});

$(document).ready(function(){
function topnav2(){
	 
	  var planItems = $('ul.nav_navcon li');
		planItems.each(function(index) {
		var li = $(this);
		var div= $('li.sel1 a');
			li.mouseover(function() {
				$('ul.nav_navcon li').addClass('');
					li.addClass('sel');
					div.css('border-bottom','none');
					
				});
			  li.mouseout(function() {
					li.removeClass('sel');
					div.css('border-bottom','3px solid #B21112');
				});
			});
	  };
	  topnav2();
	  
	  function topnav1(){
	
	 var _show = null;
	  var _hideTimer = null;
	  var planItems = $('ul.c-fl-ul li.division');
		planItems.each(function(index) {
	       
			var li = $(this);
			
			var div = li.find('div.navshow_div');
			div.css("display","none");
			li.bind('mouseenter',function() {
				if (_show != null) {
					clearTimeout(_show);
				}
				_show = setTimeout(function() {
					$('ul.nav_navcon li').addClass('');
					
					li.addClass('topnav_sel');
					
					
				}, 200);
				});
			  li.bind('mouseleave', function() {
					if (_show != null) {
					clearTimeout(_show);
				}
				_hideTimer = setTimeout(function() {
					li.removeClass('topnav_sel');
					
				}, 200);
				});
			});
	  };
	  topnav1();
	  
	  
	});






function didi(id) {
     document.getElementById("id").className="di"+id;
  }
  
function did(id) {
     document.getElementById("id1").className="dii"+id;
  }

function did1(id) {
     document.getElementById("id2").className="dii1"+id;
  }
  function did2(id) {
     document.getElementById("id3").className="dii2"+id;
  }
   function did3(id) {
     document.getElementById("id4").className="dii3"+id;
   }
     function did4(id) {
     document.getElementById("id5").className="dii4"+id;
  }
     function did5(id) {
     document.getElementById("id6").className="dii5"+id;
  }
   function search_select(id) {
     document.getElementById("id7").className="dii7"+id;
  }
     function weibo(id) {
     document.getElementById("id8").className="dii8"+id;
  }

	
		 	
//tab
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}



/*shouye*/

function setHomePage(obj){
    var aUrls=document.URL.split("/");
    var vDomainName="http://"+aUrls[2]+"/";
    try{//IE
        obj.style.behavior="url(#default#homepage)";
        obj.setHomePage(vDomainName);
    }catch(e){//other
        if(window.netscape) {//ff
            try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
            } 
            catch (e) { 
                    alert("此操作被浏览器拒绝！请在浏览器地址栏输入'about:config'并回车然后将[signed.applets.codebase_principal_support]设置为'true'"); 
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',vDomainName);
         }
    }
    if(window.netscape)alert("ff");
}