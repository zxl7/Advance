// JavaScript Document

var num95812=5;

var curnum95812=0;

var totalnum95812=5;

var showtime95812=8000;

var IntRun95812;

$(function(){

IntRun95812 = setInterval("shownext95812();", showtime95812); 

totalnum95812=$('.smallimgdiv95812').length;

$('.bigimgdiv95812').eq(0).show();

$('.smallimgdiv95812').each(

function(i){

if(i<num95812){

$(this).show();

}

$(this).mouseover(

function(){

$('.y-curimg95812').attr("class","smallimgdiv95812");

$(this).attr("class","y-curimg95812");

$('.bigimgdiv95812').hide();

$('.bigimgdiv95812').eq(i).show(); 

clearInterval(IntRun95812);

}

);

$(this).mouseout(

function(){

IntRun95812 = setInterval("shownext95812();", showtime95812); 

}

);

}

);

});

var tnum95812=0;

function shownext95812(){

if(tnum95812==totalnum95812){

tnum95812=0;

}

$('.bigimgdiv95812').hide();

$('.bigimgdiv95812').eq(tnum95812).show(); 

$('.y-curimg95812').attr("class","smallimgdiv95812");

if(tnum95812==0){

$('.smallimgdiv95812').hide();

for(var i=0;i<num95812;i++){

$('.smallimgdiv95812').eq(i).show();

}

}

if((tnum95812+1)>num95812){

$('.smallimgdiv95812').eq(tnum95812-num95812).hide();

$('.smallimgdiv95812').eq(tnum95812).show();

}

$('.smallimgdiv95812').eq(tnum95812).attr("class","y-curimg95812");

tnum95812++;

}