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