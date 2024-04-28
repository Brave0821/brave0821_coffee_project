// 2. This code loads the IFrame Player API code asynchronously.
/* const 변수 생성부분 
createElement 요소 생성 메소드
*/
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
/* src에 외부 js 라이브러리가 할당됨. */
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
/* var player; */
/* onYouTubeIframeAPIReady() 변경x api가 찾을 수 있게 */
function onYouTubeIframeAPIReady() {
    /* HTML에 <div id="player"></div> 아이디 값 찾아서 알아서 적용 */
        new YT.Player('player', {
     /*    height: '360',
        width: '640', */
        /* 어떤 ID값을 가지는 유튜브 영상을 출력할거냐. 
         videoId: 'M7lc1UVf-VE',

         /* https://www.youtube.com/watch?v=An6LvWQuj_8 
         여기중에 An6LvWQuj_8 이 부분이 ID값이고 제어를 위해 필요하다.
         */
        // videoId: 'M7lc1UVf-VE',
        videoId: 'An6LvWQuj_8', /* 최초 재생할 유튜브 영상 ID */
        playerVars : {
            autoplay : true , // 자동 재생 유무
            loop: true, // 반복 재생 유무 ture일땐 밑에 재공해야함.
            videoId: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 id 목록
        },
        events: {
            /*  onReady 준비가 되면 함수 실행 
            event 매개변수의 이름으로 받아서 함수 내부에서 사용가능
            */
            onReady: function (event) {
                /* 타켓 : 재생되는 영상 */
                event.target.mute() // 음소거
            }
        }
        /* events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        } */
    });
}