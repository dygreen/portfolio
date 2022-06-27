

// 로딩페이지 화면 정가운데 위치
function firstLoad(){
  let loadWidth = window.document.body.clientWidth;

  document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  document.getElementById("loading").style.width = loadWidth + 17;
}


// 로딩페이지 슬라이드업 + 인트로 세팅
function loadingSet(){
  let loadingBtn = document.querySelector("#loading button");

  loadingBtn.addEventListener("click", () => {
    $("#loading").slideUp(700);
    setTimeout(() => introTitle(), 750);
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  });
}


// onload 함수: 소개문구 animate 효과
function introTitle(){
  let title = document.querySelectorAll("#intro .title p");
  let i = 0;

  // 각각 delay를 다르게 주기 위한 반복문
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


// gnb: 배경/텍스트 color 변화주는 함수
function gnbChange(color){
  let topLogo = document.getElementsByClassName("top_gnbIn")[0];
  let topLogo_img = topLogo.getElementsByTagName("img")[0];
  let topLogo_ul = topLogo.getElementsByTagName("ul")[0];

  topLogo_img.setAttribute("src",`image/logo_${color}.svg`);
  topLogo_ul.style.color = `var(--${color}-color)`;
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
  let guide_list = document.querySelectorAll(".side_guide>li");

  guide_list.forEach(guide => guide.classList.remove("guide_show"));
  guide_list[i].classList.add("guide_show");
}


// 1~6 각 섹션 타이틀 채움 효과를 주는 함수
function headlineChange(i){
  let headline = document.querySelectorAll("section h2");

  headline.forEach(head => head.classList.remove("active"));
  headline[i].classList.add("active");
}


// front: 프로젝트 넘버링이 움직이는 효과를 주는 함수
function numMoving(i){
  let number_box = document.querySelector(`#front${i} .number_box`);

  number_box.style.opacity = 1;
  number_box.style.margin = "0px";
}


// front: 프로젝트 기여도 %를 채워주는 함수
function workFill(i){
  document.querySelector(`#front${i} .work .bar`).style.width = "100%";
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
    appendDesign2(i);
  }
}

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

  firstLoad(); // 로딩페이지
  loadingSet(); // 인트로 세팅


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
    } else if( scroll >= 4550 && scroll < 10190 ){
      // publishing
      guideChange(3);
      headlineChange(2);
    } else if( scroll >= 10190 && scroll < 11090 ){
      // responsive
      guideChange(4);
      headlineChange(3);
    } else if( scroll >= 11090 && scroll < 12290){
      // mobile
      guideChange(5);
      headlineChange(4);
    } else if( scroll >= 12290 && scroll < 13490 ){
      // planning
      guideChange(6);
      headlineChange(5);
    } else if( scroll >= 13490 && scroll < 14508 ){
      // design
      guideChange(6);
      headlineChange(6);
    } else {
      guideChange(7);
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
  // 로고 이미지, gnb color 바꾸기
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

    if( scrollTop >= 5094 && scrollTop < 10043){
      $("#pub").css({"position":"sticky", "top": "0"});
    } else {
      $("#pub").css({"position":"relative", "top": "0"});
    }


    // publishing -> responsive 원상태로 변경(배경,텍스트,gnb)
    if( scrollTop > 10043 ){
      $("#pub").css({"background":"var(--black-color)", "color":"var(--white-color)"});
      gnbChange('white');
    } else {
      $("#pub").css({"background":"var(--white-color)", "color":"var(--black-color)"});
    }

  });


  // ***************** RESPONSIVE *****************
  // 각 디바이스 버튼 클릭시 모달창 보여주기
  $("#respon .btnOne:not(:last-child)").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });


  // 닫기 버튼 클릭시 모달창 닫기
  $(".close").click(() => {
    $(".modal").hide(); 
    $("html").css({"overflow-y":"scroll"}); 
  });

  
  // 검정 모달 배경 클릭시 닫기
  $(".modal").click((e) => {

    if(e.target == e.currentTarget) {
      $(".modal").hide();
      $("html").css({"overflow-y":"scroll"});
    }
    return false;

  });


  // skill바 채워지는 효과
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if ( scroll > 10205 ){
      $("#respon .work .bar").css({"width": "100%"});
    } else {
      $("#respon .work .bar").css({"width": "0%"});
    }

  });


  // ***************** MOBILE *****************
  // 스킬바 + 결과물 이미지 애니메이션
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();
    
    if ( scroll > 11290 ){
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
  let button = document.querySelectorAll(".planning .plan_btn>li");
  let content = document.querySelectorAll(".planning .plan_cont>li:not(.modal)");
  
  for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => {
      tab(i);
    });
  }

  function tab(i){
    button.forEach(e => e.classList.remove("selected"));
    button[i].classList.add("selected");
    content.forEach(e => e.classList.remove("show"));
    content[i].classList.add("show");
  }


  // result 버튼 클릭시 모달창 띄우기
  document.querySelector(".plan_right_box .link2").addEventListener("click", () => {
    document.querySelector(".planning .modal").style.display = "block";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    return false;
  });


  // ***************** DESIGN *****************
  designGall(); // 썸네일 이미지 세팅


  // 썸네일 이미지 클릭시 모달창 띄우기
  $(".design_list li").click(function(){
    img_index = $(this).index();

    $(".design .modal_img>li").hide(); // 기존 이미지 숨기기
    $(".img_page span:first-child").text(img_index+1); // 페이지 넘버 바꾸기
    $("html").css({overflowY:"hidden"});
    $(".design .modal_img>li").eq(img_index).show(); // 해당하는 이미지 보여주기
    $(".design_modal").show(); // 모달창 보이기
    $(".design_btn").show(); // 버튼 보이기

    return false;
  });


  // close 버튼
  $(".design_btn .close").click(function(){
    $(".design_modal").hide();
    $(".design_btn").hide();
  });


  // 다음 버튼
  $(".design_btn .next").click(function(){
    if( img_index < 8 ){
      $(".design .modal_img>li").eq(img_index).hide(); // 기존 이미지 숨기기
      img_index++;
      $(".img_page span:first-child").text(img_index+1);
      $(".design .modal_img>li").eq(img_index).show(); // 다음 이미지 보여주기
    }
  });


  // 이전 버튼
  $(".design_btn .prev").click(() => {
    if( img_index > 0 ){
      $(".design .modal_img>li").eq(img_index).hide();
      img_index--;
      $(".img_page span:first-child").text(img_index+1);
      $(".design .modal_img>li").eq(img_index).show();
    }
  });


  // ***************** FOOTER *****************
  // 타이핑 효과(플러그인 사용)
  window.instance = new TypeIt("#typing", {
    speed: 100,
    strings: "Thanks for watching !",
    waitUntilVisible: true,
    loop: true
  }).go();


  // 페이지 마지막에 top btn 등장
  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if( scroll >= 14808 ){
      $("#top_btn").fadeIn();
    } else {
      $("#top_btn").fadeOut();
    }
    
  });

  // top btn 클릭시 부드럽게 올라가는
  $("#top_btn").click(function(){
    $("html, body").animate({scrollTop : 0}, 600);
    return false;
  });


});
