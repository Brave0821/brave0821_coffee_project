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
