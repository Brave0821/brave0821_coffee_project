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

