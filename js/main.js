/* 돋보기 */
/* El -> element */
const searchEl = document.querySelector(".search");
/* searchEl 위에 찾은데서 input를 찾게되서 더 효율적이다. */
/* document = html */
const searchInputEl = searchEl.querySelector("input")


searchEl.addEventListener("click", function (){
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function (){
    searchEl.classList.add("focused")
    searchInputEl.setAttribute("placeholder", "통합검색");
});

/* blur -> focus가 해제된 상태 -> 클릭 후 원상태로 돌아오면 위에 내용이 사라짐.*/
searchInputEl.addEventListener("blur", function (){
    searchEl.classList.remove("focused")
    searchInputEl.setAttribute("placeholder", "");
});

/* badges */

const badgeEl = document.querySelector("header .badges");

/* documment = html */
/* lodash cdn */

/* window.addEventListener("scroll", function (){
    console.log("scroll!")
}) */

/* lodash cdn으로 줄인결과. */

window.addEventListener("scroll", _.throttle(function (){
    console.log(window.scrollY);
    /* y가 500보다 커지면 */
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            /* name: '', */
            opacity: 0,
            display: "none"
        });
        /* 0.6초에 걸쳐서 서서히 사라진다.  */
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            /* name: '', */
            opacity: 1,
            display: "block"
        });
                /* 0.6초에 걸쳐서 서서히 보여진다..  */
    }
}, 300));

/* 300 - > 0.3초 
.throttle - > 일정시간 한 번씩 실행되도록 제한을 걸다.
*/


/* FADE-IN: 순차적으로 나타나는 기능. */

const fadeEls = document.querySelectorAll(".visual .fade-in");
/* fadeEl -> 요소부분은 내가 원하는 이름으로, 반복횟수 인덱스 */
fadeEls.forEach(function (fadeEl, index) {
    /* 2개의 매개변수를 가지고 있는 함수들이 반복적으로 실행 될 때 */
    gsap.to(fadeEl, 1, {
        delay:(index + 1) * 0.7,
        /*    delay:(index + 1) * 0.7, - > 
        0에 숫자 1 더해서 0.7 곱하면 fade-in 이라는 클래스를 가진 요소는 0.7초 후에 애니메이션 동작
        두 번쨰는 1.4초 세 번쨰 2.1  네 번쨰 2.7 뒤에 요소에 opacity 1로 나타내게 만듬.
        */
        opacity: 1
    } );
       // gsap.to(여기에선 반복요소, 지속시간 초 단위, 옵션);
    /* gsap.to - > 애니메이션 라이브러리 */
});


/*공지사항  스와이퍼 부분 */

/* new -> 생성자  */
// <!-- <div class="swiper-container"> 최신 버젼에선 swiper만 입력 -->
/* new Swiper(선택자, 옵션) */
new Swiper(".notice-line .swiper", {
    direction: "vertical",
    autoplay: true,
    /* loop 4번째에 반복재생여부 */
    loop: true
});

/* 자세히보기 스와이퍼 부분  */
new Swiper(".promotion .swiper", {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        /* 500 - > 0.5초 0.5초에 한번 씩 슬라이드가 자동으로 움직임
        3000 -> 3초 */
        delay: 5000
    },
    pagination: {
        el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
        clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next"
    }
});

/* active -> 활성화 */