/* sun-e studio national day | www.sky31.com | author:jishubu */
$(function(){var currPage=0;var choiceCitySort=0;var choiceCityName='';var cityIntroduce='';var randomCityTimer;var pageList=['home','choice','ballot','result'];var resultBackground=['food','sightseeing','shopping','fengqing','entertainment','red'];var imgList=['background.png','balloon.png','ballot_balloon.png','ballot_mountain.png','ballot_piaoyun.png','ballot_return_tapped.png','ballot_return.png','ballot_title.png','ballot_yun.png','button_pressed.png','choice_title.png','cloud_red.png','home_title.png','loading_rainbow.png','result_fengqing.png','result_food.png','result_home_btn_tapped.png','result_home_btn.png','result_red.png','result_entertainment.png','result_return_tapped.png','result_return.png','result_share_tapped.png','result_share.png','result_shopping.png','result_sightseeing.png','result_share_tip.png',];var totalImgNum=imgList.length;setShareInfo({title:'国庆去哪玩？ - 三翼工作室出品',summary:'超准！快来测一测你国庆适合去哪儿玩~',pic:'http://jieri.sky31.com/national-day/2016/images/home_title.png',url:'http://jieri.sky31.com/national-day/2016/',WXconfig:{swapTitleInWX:true,appId:'',timestamp:'',nonceStr:'',signature:''}});loadFunc(0);function loadFunc(curr){var currImg=new Image();currImg.src='./images/'+imgList[curr];currImg.onload=function(){curr++;showProgress(Math.floor(curr/totalImgNum*100));if(curr>=imgList.length){loadingDone()}else{loadFunc(curr)}}}function showProgress(progressNum){$('.loading-progress span').text(progressNum);$('.balloon.loading').css({'transform':'scale(0.4) translateY('+(50-Math.floor(progressNum*0.9))+'%)','-moz-transform':'scale(0.4) translateY('+(50-Math.floor(progressNum*0.9))+'%)','-webkit-transform':'scale(0.4) translateY('+(50-Math.floor(progressNum*0.9))+'%)',});$('.loading .rainbow').css('top',(90-Math.floor(progressNum*0.45))+'%')}function loadingDone(){$('.loading-words').text('FINISHED');setTimeout(function(){$('.loading').fadeOut(500);$('.home').fadeIn(500)},500)}setTimeout(function(){$('.home .title').css({'animation':'tada 1.2s forwards'})},1300);$('.home').click(function(){$('.balloon').css({'animation':'none'});turnToPage(1,1500);$('.home').fadeOut(500);setTimeout(function(){$('.balloon').addClass('fly')},700);setTimeout(function(){enterChoice()},1500)});var buttonNum=0;function enterChoice(){if(buttonNum<6){$('.choice .button').eq(buttonNum).addClass('fadeIn');buttonNum++;setTimeout(function(){enterChoice()},150)}else{return}}$('.button').click(function(){if($(this).hasClass('active')){$('.ballot .title-tip span').text(citySortName[$(this).index()]);choiceCitySort=$(this).index();$('.result').css('background-image','url(./images/result_'+resultBackground[choiceCitySort]+'.png)');turnToPage(2,1700);setTimeout(function(){$('.balloon').removeClass('fly').addClass('fly-away')},700)}else{$('.button').removeClass('active');$(this).addClass('active')}});$('.steering-wheel').click(function(){if($('.ballot .tip-start').hasClass('running')){clearTimeout(randomCityTimer);leaveForCity();return}$('.ballot .tip-start').fadeOut(300);setTimeout(function(){$('.ballot .tip-start').addClass('running').fadeIn(300);randomCity(choiceCitySort)},350)});$('.ballot .return-btn').click(function(){$(this).addClass('active');$('.button').removeClass('active');setTimeout(function(){$('.ballot .return-btn').removeClass('active');$('.balloon').removeClass('fly-away').addClass('fly');turnToPage(1,1000)},500)});function randomCity(choiceCitySort){var currRandom=Math.floor(Math.random()*citySort[choiceCitySort].length);$('.ballot .tip-start').text(citySort[choiceCitySort][currRandom]);randomCityTimer=setTimeout(function(){randomCity(choiceCitySort)},70)}function leaveForCity(){choiceCityName=$('.ballot .tip-start').text();if('undefined'!=typeof mqq){document.title="出发！"+choiceCityName+"！";mqq.invoke('ui','refreshTitle')}setShareInfo({title:'国庆去哪玩？ - 三翼工作室出品',summary:'超准！我去了'+choiceCityName+'，你要一起吗？',pic:'http://jieri.sky31.com/national-day/2016/images/home_title.png',url:'http://jieri.sky31.com/national-day/2016/',WXconfig:{swapTitleInWX:true,appId:'',timestamp:'',nonceStr:'',signature:''}});$('.piaoyun').removeClass('fly');$('.mountain').removeClass('fly');$('.yun').removeClass('fly');$('.ballot-balloon').removeClass('fly');$('.ballot-balloon .title-tip').fadeOut(500);$('.ballot-balloon .title-img').fadeOut(500);$('.go-to-city span').text(choiceCityName);$('.piaoyun').addClass('speedUp');$('.mountain').addClass('speedUp');$('.yun').addClass('speedUp');$('.ballot-balloon').addClass('speedUp');setTimeout(function(){$('.go-to-city').fadeIn(500)},600);setTimeout(function(){$('.white').fadeIn(1200)},2500);setTimeout(function(){turnToPage(3,0);cityIntroduce=cityIntro[choiceCityName];$('.result .title span').text(choiceCityName);$('.result .content .words').text(cityIntroduce)},3900);setTimeout(function(){$('.white').fadeOut(500)},4000)}$('.result .return-btn').click(function(){$(this).addClass('active');setTimeout(function(){$('.result .return-btn').removeClass('active')},500);$('.white').fadeIn(500);setTimeout(function(){turnToPage(2,50)},300);setTimeout(function(){$('.white').fadeOut(500)},600);ballotReset(false)});$('.result .share-btn').click(function(){$(this).addClass('active');setTimeout(function(){$('.result .share-btn').removeClass('active')},500);setTimeout(function(){if('undefined'!=typeof mqq){mqq.invoke('ui','showShareMenu')}else{$('.share-tip').fadeIn(500);setTimeout(function(){$('.share-tip').fadeOut(500)},3000)}},500)});$('.result .home-group').click(function(){$(this).addClass('active');setTimeout(function(){$('.result .home-group').removeClass('active');turnToPage(0,500);if('undefined'!=typeof mqq){document.title="国庆去哪玩？ - 三翼工作室出品";mqq.invoke('ui','refreshTitle')}},500);ballotReset(true)});function ballotReset(formHome){if(formHome){$('.balloon').removeClass('fly-away').removeClass('fly')}$('.button').removeClass('active');$('.ballot .tip-start').removeClass('running');$('.ballot .tip-start').text('开始');choiceCityName=$('.ballot .tip-start').text();$('.piaoyun').removeClass('speedUp');$('.mountain').removeClass('speedUp');$('.yun').removeClass('speedUp');$('.ballot-balloon').removeClass('speedUp');$('.piaoyun').addClass('fly');$('.mountain').addClass('fly');$('.yun').addClass('fly');$('.ballot-balloon').addClass('fly');$('.ballot-balloon .title-tip').fadeIn(100);$('.ballot-balloon .title-img').fadeIn(100);$('.go-to-city').fadeOut(100)}function turnToPage(toPage,duration){$('.'+pageList[currPage]).fadeOut(500);setTimeout(function(){$('.'+pageList[toPage]).fadeIn(500)},duration);currPage=toPage}});