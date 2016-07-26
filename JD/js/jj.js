/**
 * Created by Administrator on 16-7-3.
 */
/**
 * Created by Administrator on 16-6-19.
 */
var autoImg=document.getElementById('auto-img');
var banner=document.getElementById('banner');
var imgDiv=banner.getElementsByTagName('div');
var imgList=banner.getElementsByTagName('img');
var oUl=autoImg.getElementsByClassName("button")[0];
var lis=oUl.getElementsByTagName('li');
var btnLeft=autoImg.getElementsByClassName('left')[0];
var btnRight=autoImg.getElementsByClassName('right')[0];




/*
var data=null;
function getData(){
    var xhr=new XMLHttpRequest();
    xhr.open("get","data.txt?_="+Math.random(),false);
    xhr.onreadystatechange= function () {
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            data=utils.jsonParse(xhr.responseText);
        }
    }
    xhr.send(null);
}
getData();
console.log(data);





function dataBind(){
    var str='';
    var focusStr='';
    for(var i=0;i<data.length;i++){
        var curData=data[i];
        if(i==0){
            str+='<div class="inner one"><img src="'+curData.src+'" trueSrc="'+curData.src+'"/></div>';
        }else if(i==1){
            str+='<div class="inner four"><img src="'+curData.src+'" trueSrc="'+curData.src+'"/></div>';
        }else if(i==2){
            str+='<div class="inner three"><img src="'+curData.src+'" trueSrc="'+curData.src+'"/></div>';
        }else if(i==3){
            str+='<div class="inner two"><img src="'+curData.src+'" trueSrc="'+curData.src+'"/></div>';
        }
        focusStr+= i==0? '<li class="bg"></li>':'<li></li>';
    }
    banner.innerHTML=str;
    oUl.innerHTML=focusStr;
}
dataBind();

*/






/*
function imgDelayLoad(){
    for(var i=0;i<imgList.length;i++){
        (function (i) {
            var curImg=imgList[i];
            if(curImg.isload){return}
            var tempImg=new Image();
            tempImg.src=curImg.getAttribute('trueSrc');
            tempImg.onload= function () {
                curImg.src=this.src;
                utils.css(curImg,'display','block');
                tempImg=null;
                if(i===0){
                    utils.css(curImg.parentNode,'zIndex',1);
                    zhufengAnimate(curImg.parentNode,{opacity:1},100);
                }else{
                    utils.css(curImg.parentNode,'zIndex',0);
                }
            }
            curImg.isload=true;
        })(i);

    }
}
window.setTimeout(imgDelayLoad,500);
*/




var step=0;
var timer=null;
var interval=2000;
function autoMove(){
    if(step==3){
        step=-1;
    }
    step++;
    setBanner()
}

function setBanner(){
    for(var i=0;i<imgDiv.length;i++){
        var curDiv=imgDiv[i];
        if(i==step){
            utils.css(curDiv,'zIndex',1);
            zhufengAnimate(curDiv,{opacity:1},300,function(){
                var siblings=utils.siblings(this);
                for(var k=0;k<siblings.length;k++){
                    var curSibling=siblings[k];
                    utils.css(curSibling,'opacity',0);
                }
            });
        }else{
            utils.css(curDiv,'zIndex',0);
        }
    }

    for(var j=0;j<lis.length;j++) {
        var curLis = lis[j];
        if (j == step) {
            utils.addClass(curLis,'bg');
        }else{ utils.removeClass(curLis,'bg');}
    }
}
timer=window.setInterval(autoMove,interval);

autoImg.onmouseover= function () {
    window.clearInterval(timer);
    btnLeft.style.display=btnRight.style.display='block';
}
autoImg.onmouseout= function () {
    timer=window.setInterval(autoMove,interval);
    btnLeft.style.display=btnRight.style.display='none';
}


btnLeft.onclick= function () {
    if(step==0){
        step=data.length;
    }
    step--;
    setBanner();

}
btnRight.onclick=autoMove;

function focuD(){
    for(var i=0;i<lis.length;i++){
        var curlis=lis[i];
        curlis.suoyin=i;
        curlis.onclick= function () {
            step=this.suoyin;
            setBanner();
        }
    }
}
focuD();

/*///////////////////////////////////////////////////////////////////////////////////////////////*/


var banner1=document.getElementById("banner1");
var bannerWrap1=banner1.getElementsByClassName('bannerWrap1')[0];
console.log(bannerWrap1)
var imgList1=bannerWrap1.getElementsByTagName('img');
var leftBtn1=banner1.getElementsByClassName('leftBtn1')[0];
var rightBtn1=banner1.getElementsByClassName('rightBtn1')[0];



banner1.onmouseover= function () {
    leftBtn1.style.display=rightBtn1.style.display='block';
}
banner1.onmouseout= function () {
    leftBtn1.style.display=rightBtn1.style.display='none';
}


var step1=0;
leftBtn1.onclick= function () {
if(step1<=0){
    step1=1;
}
    step1--;
    window.zhufengAnimate(bannerWrap1,{left:-step1*1200},500);
}
rightBtn1.onclick = function () {
    if(step1>=1){
        step1=0;
    }
    step1++;
    window.zhufengAnimate(bannerWrap1,{left:-step1*1200},500);
}

/////////////////////////////////////////////////////////////////////////////////////



var bannerm=utils.getElementsByClass('banner-m')[0];
console.log(bannerm)
var bannerImgWrapm=bannerm.getElementsByClassName("bannerWrap-m")[0]
console.log(bannerImgWrapm)
var imgListm = bannerImgWrapm.getElementsByTagName('img');
console.log(imgListm)
var oUlm=bannerm.getElementsByClassName("oUlm")[0];
var olis=oUlm.getElementsByTagName("li");
var ospans=oUlm.getElementsByTagName("span");
console.log(ospans)


/*var data=null;
function getData(){
    var xhr=new XMLHttpRequest();
    xhr.open("get","data.txt?_="+Math.random(),false);
    xhr.onreadystatechange= function () {
        if(xhr.readyState==4&&xhr.status==200){
            data=utils.jsonParse(xhr.responseText);
        }
    }
    xhr.send(null);
}
getData();
console.log(data)*/




/*
function dataBind(){
    var str='';
    var strFocus='';
    if(data){
        for(var i=0;i<data.length;i++){
            var curData=data[i];
            str+='<div><img src=""trueSrc="'+curData.src+'"/></div>';
            if(i===0){
                strFocus+='<li class="bg"></li>';
            }else{
                strFocus+='<li></li>';
            }
        }
        str+='<div><img src=""trueSrc="'+data[0].src+'"/></div>';
        bannerImgWrap.innerHTML=str;
        focusList.innerHTML=strFocus;
        utils.setCss(bannerImgWrap,'width',(data.length+1)*1000);
    }
}
dataBind()

console.log(imgList);
*/



/*function delayLoadImg(){
    for(var i=0;i<imgList.length;i++){
        (function (i) {
            var curImg=imgList[i];
            if(curImg.isload){return;}
            var tempImg=new Image();
            tempImg.src=curImg.getAttribute('trueSrc');
            tempImg.onload= function () {
                curImg.src=this.src;
                curImg.style.display='block';
                window.zhufengAnimate(curImg,{opacity:1},300,2)
                tempImg=null;
            }
            curImg.isload=true;
        })(i);
    }
}
window.setTimeout(delayLoadImg,500);*/




var timerm=null;
var stepm=0;
var intervalm=2000;
function autoMovem(){
    if(stepm==2){
        stepm=-1;
    }
    stepm++;
    window.zhufengAnimate(bannerImgWrapm,{left:-stepm*330},200);
    focusAlignm()
}
timerm=window.setInterval(autoMovem,intervalm);
function focusAlignm(){
    var tempStepm=stepm;
    for(var i=0;i<ospans.length;i++){
        var curspan=ospans[i];
        if(i==tempStepm){
            curspan.className="tr";
            utils.css(curspan,"width",30);
        }else{
            curspan.className="";
           utils.css(curspan,"width",0);
        }
    }
}









/*
function bindEventForFocus(){
    for(var i=0;i<olis.length;i++){
        var curlis=olis[i];
        curlis.index=i;
        curlis.onmouseover= function () {
            stepm=this.index;
            window.zhufengAnimate(bannerImgWrapm,{left:-stepm*330},200);


        }

    }
}
bindEventForFocus()
*/

bannerm.onmouseover= function () {
    window.clearInterval(timerm);

}
bannerm.onmouseout= function () {
    timerm=window.setInterval(autoMovem,interval);

}

//////////////////////////////////////////////////////////////////////


/**
 * Created by Administrator on 16-6-22.
 */
~function () {
    function Banner(bannerId,interval){
        this.bannerq = document.getElementById(bannerId);
        this.bannerWrapq = utils.fistEleChild(this.bannerq);
        this.oUlq = utils.children(this.bannerq,'ul')[0];

        this.imgListq = this.bannerWrapq.getElementsByTagName('img');
        this.lisq = this.oUlq.getElementsByTagName('li');
        this.ospansq=this.oUlq.getElementsByTagName("span");
        this.stepq=0;
        this.timerq=null;
        this.intervalq=2000;
        return this.init();

    }
    Banner.prototype={
        constructor:Banner,

        autoMove: function () {
            if(this.stepq==2){
                this.stepq=-1;
            }
            this.stepq++;
            window.zhufengAnimate(this.bannerWrapq,{left:-this.stepq*330},200);
            this.focusD();
        },
        focusD: function () {
            var tempq=this.stepq;
            for(var i=0;i<this.ospansq.length;i++){
                var curspan=this.ospansq[i];

                if(i==tempq){
                    curspan.className='tr';
                    utils.css(curspan,"width",30);
                }else{
                    curspan.className='';
                    utils.css(curspan,"width",0);
                }
            }
        },
        setMouseEvent: function () {
            var that=this;
            this.bannerq.onmouseover= function () {
                window.clearInterval(that.timer);
            }
            this.bannerq.onmouseout= function () {
                that.timerq=window.setInterval(function () {
                    that.autoMove();
                },that.interval);
            }
        },

        init: function () {
            var that=this;
            this.timerq=window.setInterval(function () {
                that.autoMove();
            },this.intervalq);
            this.focusD();
            this. setMouseEvent();
            return this;
        }
    }
    window.Banner=Banner/*('banner','data.txt',2000)*/;
}();

var Banner1=new Banner('ttt',2000);
var Banner1=new Banner('lll',2000);
var Banner1=new Banner('ccc',2000);
var Banner1=new Banner('ddd',2000);
var Banner1=new Banner('eee',2000);
var Banner1=new Banner('fff',2000);
var Banner1=new Banner('ggg',2000);


/////////////////////////////////////////////////////////////
var tabUl=document.getElementById("tabUl");
var aiss=tabUl.getElementsByTagName('a');

var tabBox=document.getElementById("tab");
var tabdivs=tabBox.getElementsByClassName("tab-con");
var em=document.getElementsByClassName("auto-an")[0];
console.log(em)

for(var i=0;i<aiss.length;i++){
    aiss[i].suoyin=i;
    aiss[i].onmouseover=function(){
        change(this.suoyin);
        if(this.suoyin==0){
            zhufengAnimate(em,{left:88},300);
        }else if(this.suoyin==1){
            zhufengAnimate(em,{left:157},300);
        }else if(this.suoyin==2){
            zhufengAnimate(em,{left:230},300);
        }
    }
}
function change(xxx){
    for(i=0;i<aiss.length;i++){
        aiss[i].className="";
        tabdivs[i].className="tab-con";
    }
    aiss[xxx].className="active";
    tabdivs[xxx].className="tab-con selected";
}

/////////////////////////////////////////////////////////////////

var div1 = document.getElementsByClassName("Sea-Amoy");
var sidebarUl=document.getElementsByClassName("sidebar")[0];
var aa = sidebarUl.getElementsByTagName("a");
console.log(aa)
var ii=sidebarUl.getElementsByTagName("i");
var emm=sidebarUl.getElementsByTagName("em");


for (var i = 0; i < aa.length; i++) {
    var cura = aa[i];
    cura.index = i;

    cura.onclick = function () {
        window.onscroll=null;
        ii[this.index].style.display="none";
        emm[this.index].style.display="block";

        for (var i = 0; i < aa.length; i++){
            ii[i]!=this?ii[i].style.display='block':null;
            emm[i]!=this?emm[i].style.display='none':null;
        }

        for (var k = 0; k < div1.length; k++) {
            var curdiv = div1[k];
            if (k == this.index) {
                var offsetTop = utils.offset(curdiv).top;
                var curScollTop = utils.win("scrollTop");
                var change = Math.abs(offsetTop - curScollTop);
                var duration = 200;
                var interval = 10;
                var speed = change / duration * interval;
                var timer = window.setInterval(function () {
                    if (curScollTop > offsetTop) {
                        if ((curScollTop - speed) <= offsetTop) {
                            window.clearInterval(timer);
                            window.onscroll=fn;
                        }
                        curScollTop -= speed;
                    } else {

                        if ((curScollTop + speed) >= offsetTop) {
                            window.clearInterval(timer);
                            window.onscroll=fn;

                        }
                        curScollTop += speed;
                    }

                    utils.win('scrollTop', curScollTop);

                }, interval)
            }
        }

    }
}
var fn= function () {
    for (var k = 0; k < div1.length; k++){
        var curdiv = div1[k];
        curdiv.suoyin=k;
        var that=curdiv;
        var offsetTop = utils.offset(curdiv).top;
        var curScollTop = utils.win("scrollTop");
        if(curScollTop < offsetTop){
            if(offsetTop-curScollTop<=utils.win("clientHeight")){
                ii[that.suoyin].style.display="none";
                emm[that.suoyin].style.display="block";

            }else{
                ii[that.suoyin].style.display="block";
                emm[that.suoyin].style.display="none";
            }
        }else{
            if(offsetTop-curScollTop>=utils.win("clientHeight")){
                ii[that.suoyin].style.display="none";
                emm[that.suoyin].style.display="block";
            }else{
                ii[that.suoyin].style.display="block";
                emm[that.suoyin].style.display="none";
            }
        }

    }

}

window.onscroll=fn;











/*for (var i = 0; i < aa.length; i++) {
    var cura = aa[i];
    cura.index = i;
    var that = this;
    cura.onclick= function () {
        for (var k = 0; k < div1.length; k++) {
            var curdiv = div1[k];
            if (k == this.index) {
                var offsetTop = utils.offset(curdiv).top;
                var curScollTop = utils.win("scrollTop");
                var change = Math.abs(offsetTop - curScollTop);
                var duration = 200;
                var interval = 10;
                var speed = change / duration * interval;
                var timer = window.setInterval(function () {
                    if (curScollTop > offsetTop) {

                        if ((curScollTop - speed) <= offsetTop) {
                            window.clearInterval(timer);
                            utils.css(curdiv, "top", 0);
                        }
                        curScollTop -= speed;
                    } else {
//                            curScollTop += speed;
                        if ((curScollTop + speed) >= offsetTop) {

                            utils.css(curdiv, "top", 0);

                            window.clearInterval(timer);


                        }
                        curScollTop += speed;
                    }

                    utils.win('scrollTop', curScollTop);

                }, interval)


            }
        }

    }
}*/
