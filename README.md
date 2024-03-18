# 스타벅스 웹사이트 제작하기

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">



패스트 캠퍼스의 ***한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online - Part 1*** 강의를 따라 작성했습니다.



:small_red_triangle_down: 패스트캠퍼스 강의 페이지 바로가기

[14일 만에 만드는 스타벅스 웹 사이트 with HTML&CSS](https://fastcampus.co.kr/dev_online_ccsb)

</br>

## 제작 결과

로고, 서브메뉴, 검색창, 드롭다운 메인메뉴를 만들었습니다

![전체화면1](https://github.com/seongeun123/Starbucks-Homepage/assets/97885785/714b4580-f8db-4f1e-8224-1226eabb6616)

</br>

돋보기가 그려진 입력창을 클릭하면 돋보기가 사라지면서 통합검색 글자가 나타납니다.

![전체화면2](https://github.com/seongeun123/Starbucks-Homepage/assets/97885785/975e66ff-8638-4307-82d6-b158f9f53482)

</br>

메인 메뉴 위에 마우스를 올리면 메뉴 글씨가 초록색으로 바뀌면서 하위 메뉴가 보입니다

![전체화면3](https://github.com/seongeun123/Starbucks-Homepage/assets/97885785/52d70991-b588-49f7-b3c3-3ffc2f8d24eb)

</br>


## 강의 내용

**강의 시작 (79강 ~ 82강)**

1. favicon.ico 로 사이트의 아이콘이 자동 설정 되었다.
    고화질 사진을 사용하기 위해서 favicon.png 으로 재설정해주었다.
2. reset-css CDN 파일로 브라우저 스타일을 초기화 했다.
    그 아래에 css 파일을 연결했다.


1. 오픈 그래프란: 페이지를 주소로 sns에 공유할 때 주소와 함께 아래 같이 생기는 이미지 카드 (사이트 사진, 사이트 이름...)
<meta property=" " content=" " /> 로 설정한다
    트위터 카드라는 개념도 있다.


1. 폰트 설정 없이 사이트를 만들면 각 브라우저에서 폰트가 다를 수 있다.
Google Fonts에서 Nanum Gothic (나눔 고딕) Regular, Bold 링크 태그 복사해서 폰트 연결함.
body 태그 안에 있는 모든 태그가 나눔고딕체를 상속받는다


1. 사이트 제작에 자주 사용되는 아이콘(ex) 검색 돋보기, 다운로드 화살표 등등)는 
구글 material.io 에서 찾을 수 있다

2. 아이콘도 글자처럼 취급한다. font-size로 크기 조절 가능

</br>

**헤더 제작 시작 (83강)**


1. <header> : 사이트의 헤더를 제작하는 태그. <div>으로 제작해도 된다.

2. 가운데 정렬 방법 : 
   width 설정 & margin: 0 auto

3. 사진 같은 인라인 요소는 여백이 존재한다.
   display: block 으로 이를 수정했다.

3. 수직 가운데 정렬 방법 : 수직방향으로 끝점을 잡고 margin으로 auto값을 계산한다.
   (height가 지정되어 있어야 함)
   position: absolute; 
    top: 0;
    bottom:0;
    margin:auto;
   
</br>

**서브 메뉴, 검색창 제작 (84강, 85강)**

- href 안에 링크 비워놓는 방법
1. #
    URL 해시(Hash) 
2. javascript:void(0)  
    자바스크립트를 통해서 어떤 기능을 동작시킬건데, 동작이 void 하다 - 아무것도 없다.

- 로고를 잠깐 사라지게 하는 법.(안보이게 하는법)
display: none;

- 버튼을 만들 때는 사용자가 쉽게 누를 수 있도록 UI에 신경써야 한다.
  ex) 글자 배경색을 추가

- 글자 밑줄 지우는 법: 
   text-decoration: none;

- 가상요소 설정방법
  before content: ""


- setAttribute() : HTML의 속성을 지정할 때 사용하는 메소드

</br>

**드롭다운 메인 메뉴 제작 (86강~)**

//헤더에 메인 메뉴 제작 시작."드롭다운 메뉴" 메뉴에 마우스를 올리면 하위 메뉴들이 보인다

- 메뉴에 hover 효과를 적용할 때, 드롭다운 메뉴에도 함께 적용되어야 한다. 
- inner 라는 클래스로 화면 중앙에 출력할 수 있다. 
- ul 태그 안에 있는 ul 태그 안에 있는 ul 태그를 가리킬 때 자식선택자를 사용할 것.
- cursor : pointer 란


</br>


## 후기
선수지식 없는 상태로 패스트 캠퍼스 강의를 시청해서 처음으로 만들어 본 사이트입니다ㅎㅎ 

HTML, CSS, 자바스크립트를 이제 막 알게 된 저도 따라 만들 수 있는 예제였어서 신기하고 뿌듯했습니다!


🍀 강의는 VSCode 사용하는 법, HTML, CSS, JS, 스타벅스 예제 순입니다 

(이 뒤에도 코드 버전 관리 방법, 마크 다운, 데스크탑 모드로 개발하기 등 강의가 계속 있습니다,,,) 


강의를 끝까지 들으면 아래 데모 페이지처럼 근사하게 만들 수 있습니다~~ 

저도 강의를 계속 듣고 확장시켜서 완성본을 업로드할 예정입니다😚🏃



:small_red_triangle_down: 데모 페이지 바로가기 

[데모 페이지](https://priceless-bhabha-83fc0d.netlify.app/)
