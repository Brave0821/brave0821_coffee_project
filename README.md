## BEM 작명법 
```
<div class="container">
    <div class="name"></div>
    <div class="item">
        <div class="name"></div>
    </div>
</div>

* 적용 후 

<div class="container">
    <div class="container__name"></div>
    <div class="item">
        <div class="item__name"></div>
    </div>
</div>

* 어느 부분의 일부분이다 알 수 있음.
```
```
<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>


* 적용 후 

<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

--------------------------------------------------------------------------------------------

## JS lodash.js CDN

* https://cdnjs.com/libraries/lodash.js

```
window.addEventListener("scroll", _.throttle(function (){
    console.log("scroll!")
}, 300));
```
_.throttle - > 일정시간 한 번씩 실행되도록 제한을 걸다.

_.throttle(함수, 시간)

스크롤 이벤트시 많이 사용되니까 참고.

Why? 스크롤 할 때마다 여기에 연결되어져 있는 익명의 함수가 굉장히 많은 횟수에 걸쳐서 실행되기 때문에.
사용해주는게 좋다.


    console.log(window.scrollY); 주면서 내릴 때 몇 픽셀 지점인지 확인가능.

----------------------------------------------------------------------------------------------

## JS gsap cdn

* https://cdnjs.com/libraries/gsap

### 애니메이션을 처리해주는 라이브러리 많이 사용한다.

* 예시 - > 오른쪽 뱃지가 서서히 사라지고 올리면 나타난다.
```
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
```
----------------------------------------------------------------------------------------------
visual 부분 필기 
- section = 계층이다. 



###  FADE-IN: 순차적으로 나타나는 기능.
* 배너 오트밀, 카라멜 스푼 등등 순차적으로 나타냄


```
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
```
--------------------------------------------------------------------------------------------------

## 기타 도움되는 

* reset css
```
   <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <!-- https://www.jsdelivr.com/package/npm/reset-css 리셋 css 추가. -->
```

* 아이콘 

```
    <!-- https://fontawesome.com/search?q=Search&o=r 아이콘 -->
    <!-- https://fonts.google.com/icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
### 사용법 : ^ 에 아이콘 사이트에 들어가서 원하는 아이콘 네임 가져와서 밑에 입력
```
 ex) <div class="material-icons">add_circle</div>

```

---------------------------------------------------------------------------------------------------
# swiperjs v11.1.1 버젼

* https://swiperjs.com/


