// onload 함수: 소개문구 animate 효과
function introTitle(){
  let title = document.querySelectorAll("#intro .title p");
  let i = 0;

  // 각 요소별 delay를 다르게 주기 위한 반복문
  for( let a = 1; a <= title.length; a++ ){
    let titleText = document.querySelector(`#intro .title .t1-${a}`);
    let slideUp = [
      {transform: "translateY(160px)"},
      {transform: "translateY(0px)"}
    ]
    let slideUpTiming = {
      duration: 400,
      delay: `${200 * i}`
    }

    titleText.animate(slideUp, slideUpTiming);
    i++;
  }
}


// aside: scroll위치에 따라 guide내용을 바꾸는 함수
function guideChange(i){
  let guide_list = $(".side_guide>li");
  guide_list.removeClass("guide_show");
  guide_list.eq(i).addClass("guide_show");
}


// 1~6 각 섹션 타이틀 채움 효과를 줄 함수
function headlineChange(i){
  let headline = $("section h2");
  headline.removeClass("active");
  headline.eq(i).addClass("active");
}


// 프로젝트 넘버링이 움직이는 효과를 줄 함수
function numMoving(i){
  let number_box = $(`#front${i} .number_box`);
  number_box.css({"opacity":"1", "margin":"0px"});
}


// 프로젝트 기여도 %를 채워줄 함수
function workFill(i){
  $(`#front${i} .work .bar`).css({"width": "100%"});
}


window.addEventListener("DOMContentLoaded", function(){
  
  // 왼쪽 guide 내용 바꿈 + 각 섹션 타이틀 채워짐 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();
    // console.log(scroll);

    if( scroll < 600 ){
      $("#top_gnb").slideUp();
      guideChange(0);
      $("section h2").removeClass("active");
    } else if( scroll >= 600 && scroll < 1640 ){
      $("#top_gnb").slideDown();
      // about
      guideChange(1);
      headlineChange(0);
    } else if( scroll >= 1640 && scroll < 4550 ){
      // front
      guideChange(2);
      headlineChange(1);
    } else if( scroll >= 4550 ){
      guideChange(3);
      headlineChange(2);
    }
  });


  // about: skill바 채워지는 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll > 800){
      $(".skill_list li:nth-child(1) .bar, .skill_list li:nth-child(2) .bar").css({"width": "90%"});
      $(".skill_list li:nth-child(3) .bar").css({"width": "80%"});
      $(".skill_list li:nth-child(4) .bar").css({"width": "85%"});
      $(".skill_list li:nth-child(5) .bar").css({"width": "75%"});
    } else {
      $(".bar").css({"width": "0%"});
    }
  });


  // front: 프로젝트 넘버링 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll > 1800 && scroll < 2900){
      numMoving(1);
      workFill(1);
    } else if( scroll >= 2900 && scroll < 3740 ){
      numMoving(2);
      workFill(2);
    } else if( scroll >= 3740 ){
      numMoving(3);
      workFill(3);
    }
  });


  // publishing 부분: 로고 이미지 검정, gnb color 바꾸기
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll >= 5054 ){
      $(".top_gnbIn img").attr("src","image/logo_black.svg");
      $(".top_gnbIn ul li").css({"color":"var(--black-color)"});
    } else {
      $(".top_gnbIn img").attr("src","image/logo_white.svg");
      $(".top_gnbIn ul li").css({"color":"var(--white-color)"});
    }
  });


  // publishing: 가로 스크롤 구현
 /*  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    // let offset = scroll - $("#pub").offset().top;
    let offset = scroll - $("#pub .row_box").offset().top;
    // console.log(offset);
    console.log(scroll);

    let scrollLeft = $(".row_box").scrollLeft();
    console.log(scrollLeft);

    if ( scroll > $("#pub .row_box").offset().top ) {
        $("#pub .row_box>li").css("left", -offset);
        // $("#pub .row_box").css("transform", `translateX(${-offset}px)`);
    }

    if ( scroll >= 4786 ) {
        // $("#pub .row_box").css("left", -offset);
        // $("#pub .row_box").css("transform", `translateX(${-offset}px)`);
        let moveing = scrollLeft + scroll;
        $("#pub .row_box").css("transform", `translateX(${-moveing}px)`);
    }
  });
 */

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let offset = scrollTop - $(".row_box").offset().top;
    console.log(scrollTop);
    console.log(offset);

    if (scrollTop > $(".row_box").offset().top) {
        $(".row_box>li").css("left", -offset);
      } else {
      $(".row_box>li").css("left", -offset);
    }
  });

  /* $(window).scroll(function(){
    let scrollLeft = $(".row_box>li").scrollLeft();
    console.log(scrollLeft);
    
    $(".row").mousewheel(function(e){
    let wheelDelta = e.originalEvent.wheelDelta;

      if(wheelDelta > 0){			
        console.log("up");	
        $(".row_box>li").scrollLeft(scrollLeft + 100);		
      }else{		
        console.log("down");			
        $(".row_box>li").scrollLeft(scrollLeft - 100);		
      }
    });
  }); */



});

/* 
$(function() {

  $("body").mousewheel(function(event, delta) {
    console.log(delta);

    this.scrollLeft -= (delta * 300);
    
    event.preventDefault();

  });
}); */

/* $('.row').on('mousewheel',function(e, delta){		
  var wheelDelta = e.originalEvent.wheelDelta;	
  // console.log(wheelDelta);	
  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    // let offset = scroll - $("#pub").offset().top;
    let offset = scroll - $('.row_box').offset().top;
    // console.log(offset);
    // console.log(scroll);
    let offsetX = $('.row_box>li').offset().left;
    console.log(offsetX);

    if(wheelDelta > 0){			
      console.log("up");			
      // $('.row_box').scrollLeft(-wheelDelta + $('.row').scrollLeft());		
      // $('.row_box').css('left', -wheelDelta + $('.row').scrollLeft());
      $('.row_box>li').css('right', `${-wheelDelta + offset}px`);
      // $('.row_box>li').css('right', wheelDelta -= scroll);
    }else{		
      console.log("down");			
      // $('.row_box').scrollLeft(-wheelDelta + $('.row').scrollLeft());		
      // $('.row_box').css('left', wheelDelta + $('.row').scrollLeft());
      // $('.row_box>li').css('right', -wheelDelta + offset);
      $('.row_box>li').css('right', `${-wheelDelta + offset}px`);
    }


  }); */
  // console.log(e);
  // console.log(delta);
  // console.log($('.row').scrollLeft());
// });

/* $('.row_box').on('mousewheel DOMMouseScroll', function(event){

  var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

  $(this).scrollLeft( $(this).scrollLeft() - ( delta * 40 ) );
  event.preventDefault();

}); */