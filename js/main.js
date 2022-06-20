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


// gnb: 배경/텍스트 변화주는 함수
function gnbChange(color){
  $(".top_gnbIn img").attr("src",`image/logo_${color}.svg`);
  $(".top_gnbIn ul li").css({"color":`var(--${color}-color)`});
}


// 책갈피 클릭시 부드럽게 움직이는
document.querySelectorAll("#top_gnb li a, nav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// aside: scroll위치에 따라 guide내용을 바꾸는 함수
function guideChange(i){
  let guide_list = $(".side_guide>li");
  guide_list.removeClass("guide_show");
  guide_list.eq(i).addClass("guide_show");
}


// 1~6 각 섹션 타이틀 채움 효과를 주는 함수
function headlineChange(i){
  let headline = $("section h2");
  headline.removeClass("active");
  headline.eq(i).addClass("active");
}


// front: 프로젝트 넘버링이 움직이는 효과를 주는 함수
function numMoving(i){
  let number_box = $(`#front${i} .number_box`);
  number_box.css({"opacity":"1", "margin":"0px"});
}


// front: 프로젝트 기여도 %를 채워주는 함수
function workFill(i){
  $(`#front${i} .work .bar`).css({"width": "100%"});
}


// mobile: site 버튼 클릭시 모바일 해상도 창 띄우는 함수
function openBrWindow(theURL, windName, features){

  if(typeof (window.open) == "function"){
    // window ver
    window.open(theURL, windName, features);
  } else {
    // mac ver
    window.location.href = "https://github.com/dygreen/class101";
  }

}


// design: 이미지를 9번 반복해서 붙여넣을 함수
function designGall(){
  for(let i = 1; i <= 9; i++){
    appendDesign(i);
    appendDesign2(i)
  }
}
designGall();


// design: 썸네일 이미지를 붙여줄 함수
function appendDesign(i){
  let design_imgs = $(`<li><img src="image/design${i}.jpg" alt="design result"></li>`);
  
  $(".design_list").append(design_imgs);
}

// design: 모달창 이미지를 붙여줄 함수
function appendDesign2(i){
  let design_imgs = $(`<li><img src="image/design${i}.jpg" alt="design result"></li>`);

  $(".design .modal_img").append(design_imgs);
}


// =================== ready ===================
window.addEventListener("DOMContentLoaded", function(){
  
  // 왼쪽 guide 내용 바꿈 + 각 섹션 타이틀 채워짐 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll < 600 ){
      guideChange(0);
      $("section h2").removeClass("active");
    } else if( scroll >= 600 && scroll < 1640 ){
      // about
      guideChange(1);
      headlineChange(0);
    } else if( scroll >= 1640 && scroll < 4550 ){
      // front
      guideChange(2);
      headlineChange(1);
    } else if( scroll >= 4834 && scroll < 10890 ){
      // publishing
      guideChange(3);
      headlineChange(2);
    } else if( scroll >= 10890 && scroll < 12224 ){
      // responsive
      guideChange(4);
      headlineChange(3);
    } else if( scroll >= 12224 && scroll < 13493){
      // mobile
      guideChange(5);
      headlineChange(4);
    } else if( scroll >= 13493 && scroll < 14684 ){
      // planning
      guideChange(6);
      headlineChange(5);
    } else {
      // design
      headlineChange(6);
    }

  });


  // gnb 보여주기
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll > 600){
      $("#top_gnb").slideDown();
    } else {
      $("#top_gnb").slideUp();
    }
  });


  // ***************** ABOUT *****************
  // skill바 채워지는 효과
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


  // ***************** FRONT *****************
  // 프로젝트 넘버링 효과
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


  // ***************** PUBLISING *****************
  // 로고 이미지 검정, gnb color 바꾸기
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll >= 5054 ){
      gnbChange('black');
    } else {
      gnbChange('white');
    }
  });


  // 가로 스크롤
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    let slide = scrollTop - 5000;

    if (scrollTop > $("#pub").offset().top) {
        $(".row_box>li").css("left", -slide);
      } else {
      $(".row_box>li").css("left", -slide);
    }
  });


  // position:sticky로 가로 스크롤 부분 배경 고정
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if( scrollTop >= 5094 && scrollTop < 10900){
      $("#pub").css({"position":"sticky", "top": "0"});
    } else {
      $("#pub").css({"position":"relative", "top": "0"});
    }


    // publishing -> responsive 원상태로 변경(배경,텍스트,gnb)
    if( scrollTop > 10811 ){
      $("#pub").css({"background":"var(--black-color)", "color":"var(--white-color)"});
      gnbChange('white');
    } else {
      $("#pub").css({"background":"var(--white-color)", "color":"var(--black-color)"});
    }

  });


// ***************** RESPONSIVE *****************
  // 각 디바이스 버튼 클릭시 모달창 보여주기
  $("#respon .btns>li:not(:last-child)").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });

  $(".close").click(function(){
    $(".modal").hide(); 
    $("html").css({"overflow-y":"scroll"}); 
  });

  
  // 검정 배경 클릭시 닫기
  $(".modal").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".modal").hide();
    return false;
  });


  // skill바 채워지는 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if ( scroll > 11247 ){
      $("#respon .work .bar").css({"width": "100%"});
    } else {
      $("#respon .work .bar").css({"width": "0%"});
    }

  });


  $(window).scroll(() => {
    let scroll = $(window).scrollTop();
    
    if ( scroll > 12454 ){
      // skill바 채워지는 효과
      $("#mobile .work .bar").css({"width": "100%"});
      // 결과물 이미지 애니메이션
      $(".mo_work2").css({"left": "140px"});
      $(".mo_work3").css({"right": "40px"});
      $(".mo_work4").css({"left": "30px"});
      $(".mo_work5").css({"right": "-70px"});
    } else {
      $("#mobile .work .bar").css({"width": "0%"});
      $(".mo_work2, .mo_work4").css({"left": "35%"});
      $(".mo_work3, .mo_work5").css({"right": "25%"});
    }

  });


  // ***************** PLANNING *****************
  // tab menu
  let button = $(".planning .plan_btn>li");
  let content = $(".planning .plan_cont>li");
  
  for(let i = 0; i < button.length; i++){
    button.eq(i).click(function(){
      tab(i);
    });
  }
  
  function tab(i){
    button.removeClass("selected");
    button.eq(i).addClass("selected");
    content.removeClass("show");
    content.eq(i).addClass("show");
  }


  // result 버튼 클릭시 모달창 띄우기
  $(".plan_right_box .link4").click(function(){
    $(".planning .modal").show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });


  // ***************** PLANNING *****************
  // 썸네일 이미지 클릭시 모달창 띄우기
  $(".design_list li").click(function(){
    img_index = $(this).index();

    $(".design .modal_img>li").hide(); // 기존 이미지 숨기기
    $(".img_page span:first-child").text(img_index+1); // 페이지 넘버 바꾸기
    $("html").css({overflowY:"hidden"});
    $(".design .modal_img>li").eq(img_index).show(); // 해당하는 이미지 보여주기
    $(".design .design_modal").show(); // 모달창 보이기
    $(".btn_list").show(); // 버튼 보이기

    return false;
  });


  // close 버튼
  $(".btn_list .close").click(function(){
    $(".design_modal").hide();
    $(".btn_list").hide();
  });


  // 다음 버튼
  $(".btn_list .next").click(function(){
    if( img_index < 8 ){
      $(".design .modal_img>li").eq(img_index).hide(); // 기존 이미지 숨기기
      img_index++;
      $(".img_page span:first-child").text(img_index+1);
      $(".design .modal_img>li").eq(img_index).show(); // 다음 이미지 보여주기
    }
  });


  // 이전 버튼
  $(".btn_list .prev").click(() => {
    if( img_index > 0 ){
      $(".design .modal_img>li").eq(img_index).hide();
      img_index--;
      $(".img_page span:first-child").text(img_index+1);
      $(".design .modal_img>li").eq(img_index).show();
    }
  });

});
