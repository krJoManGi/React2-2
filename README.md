# React2-2 조만기


## < 1023 수업 >
### Static Resource
* 누적 레이아웃 이동 CLS
    * 정적 자원 중 이미지 파일은 SEO에 많은 영향을 미침
    * 다운로드 시간이 많이 소요, 렌더링 후 레이아웃이 변경되는 등 UX에 영향을 미침
* Image 컴포넌트를 사용하면 cls문제를 해결함
* lazy loading: 이미지 로드 시점을 필요로 할 때까지 지연시키는 기술
* 이미지 사이즈를 최적화로 사이즈를 1/10이하로 줄여 줌
* Placeholder를 제공

### Image componet - local
* 정적 자원은 기본적으로 public 디렉토리에 저장
* 정적 자원은 번들링 이후에도 변하지 않음
* 여러 종류의 정적자원을 사용할 경우 public에 root에 저장

### 컴포넌트 구성
* 컴포넌트는 세 가지로 분류, 스타일 및 테스트 파일을 같은 곳에 두어야 함
* 코드를 효율적으로 구성하기 위해 아토믹 디자인 원칙에 따라 디렉토리 구성
* atoms: 가장 기본적인 컴포넌트 관리
* molecules: atom에 속한 컴포넌트 여러 개를 조합해 복잡한 구조로 만든 컴포넌트
* organisms: molecules와 atoms를 섞어서 더 복잡하게 만든 컴포넌트 관리
* templates: 위의 모든 컴포넌트를 어떻게 배치할지 결정해 사용자가 접근할 수 있는 페이지


## < 1004 수업 >
### Page Project Layout
* _app
    * _app.jsx는 서버에 요청할 때 가장 먼저 실행되는 컴포넌트
    * 페이지에 적용할 공통 레이아웃을 선언하는 곳
* _document
    * _document.jsx는 _app.jsx 다음에 실행
    * 각 페이지에서 공통적으로 사용될 html, head, body 안에 들어갈 내용을 선언
    * onClick 같은 이벤트나 CSS는 이곳에서 선언하는 것이 아님

### App Project Layout
* layout
    * layout.jsx는 app 디렉토리 아래에 위치
    * layout.jsx는 Page Project에서 사용하던 _app.jsx와 _document.jsx를 대체
    * 이 파일은 삭제해도 프로젝트가 실행될 때 자동으로 다시 생성

### App Project Layout
* Link componet

### Link vs a vs router.push
* a
    * \<a> tag는 html 동기식으로 전체가 reload 되기 때문에, 외부 링크할 때 사용
    * 일반적으로 내부 링크 이동시에는 사용하지 않는 것이 좋음
* router.push
    * 빌드 후, 이동할 주소가 html 상에 노출되지 않기 때문에 SEO에 취약
* Link
    * 빌드 후 자동으로 \<a> tag로 자동 변환
    * a.tag의 장점인 SEO의 최적화, prefetch 가능, 우클릭 기능 등을 갖춤
    * 내부 이동 페이지로 이동할 때 이 방식을 사용해야 SPA 방식으로 전체 HTML 중 필요한 부분만 비동기식으로 리렌더링 됨
* 결론
    * Link 컴포넌트 사용 권장

### 정적 자원 제공
* 이미지, 폰트, 아이콘, 컴파일한 css, js등으로 /public 디렉토리 안에 저장
* 정적 자원 중 이미지 파일은 SEO에 많은 영향을 미침
* 불러오는데 많은 시간이 걸리고, 불러온 후에도 이미지 주변 레이아웃이 변경되는 등 UX 관점에서 종지 않은 영향을 줌. 이를 누적 레이아웃 이동(CLS)이라고 함
* Image 컴포넌트를 사용해서 이와 같은 CLS 문제를 해결

### 자동 이미지 최적화
* Next.js 10부터 Image 컴포넌트를 사용해서 이미지를 자동으로 최적화 가능


<br>
<br>

## < 0925 수업 >
### 라우팅 시스템
* React의 React Router, Reach Router 등은 **클라이언트 라우팅만 구현** 가능
* Next는 파일시스템 기반 **페이지**와 **라우팅**
* 페이지는 /pages 디렉토리 안의 *.js, *.jsx, *.tx, *.tsx 파일에서 export한 react 컴포넌트
* 만일 블로그와 같은 **컨텐츠를 분리**해야한다면
    * /pages 아래 디렉토리를 만들고 **라우팅 규칙**을 만들 것
    * /pages 디렉토리 내부에는 **계층적 구조로 라우팅 규칙**을 만들 수 있음
    * /pages/posts 안에 **index.js**와 [slug].js를 만들어 **jsx 반환**



<br>
<br>

## < 0911 수업 >
* Babel의 단점
    * 변환한 코드를 **이해하기 어려움**
    * 원 코드에 비해 변환 코드의 **길이가 늘어남**
    * 변환에 시간이 **많이 걸림**

* SWC의 장점
    * Next 12이후 별도의 설정 없이 사용할 수 있으며, Next.js에 내장 되어있음.
    * RUST의 WASM 지원으로 어떤 종류의 플랫폼에서도 NEXT JS 개발 가능

* 렌더링 전략
    * 웹 페이지 또는 웹 에플리케이션을 **웹 브라우저에 제공하는 방법**을 의미
    * 정적인 페이지 제작에는 **Gatsby** 추천
    * **서버 사이드 렌더링** 전략을 원한다면 다른 프레임워크 검토
    * **Next.js에서는 이 모든 방법을 새로운 수준으로 제공**
    * 빌드 시점에 **정적으로 생성**하거나 **동적으로 생성**할지 쉽게 정할 수 있음
    * **요청이 있을 때마다 페이지를 다시 생성**하는 것도 가능
    * **클리언트에서 랜더링해야 할 컴포넌트도 지정** 가능해서 개발이 쉬움

* 서버 사이드 렌더링
    * 웹페이지를 제공하는 **가장 흔한 방법**
    * **APM**을 이용하는 일반적인 웹 페이지 생성
    * **자바스크립트 코드가 적재되면 동적**으로 페이지 내용을 렌더링
    * Next.js도 이와 같이 **동적으로 페이지를 렌더링** 가능
    * 스크립트 코드를 집어 넣어 웹페이지를 동적으로 처리할 수도 있는데, 이를 **하이드레이션**이라 함
<br><br>
<hr>

### SSR
* 장점
    * **더 안전한 웹 애플리케이션:**
        * 쿠키 관리, 주요 API, 데이터 검증 등과 같은 작업을 서버에서 처리하기 때문에 중요한 데이터를 클라이언트에 노출할 필요 없음
    * **더 뛰어난 웹 사이트 호환성**
        * 클라이언트 환경이 자바스크립트를 사용하지 못하거나 오래된 브라우저를 사용해도 서비스 제공 가능
    * **더 뛰어난 SEO:**
        * 서버가 랜더링한 HTML을 받기 때문에 봇이나 웹 크롤러가 페이지를 렌더링할 필요 없음
<br>
<br>
* 최적의 렌더링 전략이 아닌 경우
    * 클라이언트가 페이지를 요청할 때마다 다시 렌더링할 수 있는 **서버가 필요**
    * **더 많은 자원을 소모, 부화, 유지 보수 비용 증가**
    * 페이지 **요청 처리 시간 증가**
    * **외부 API 또는 데이터 소스에 접근**할 때 렌더링할 때마다 다시 요청
    * **페이지 간의 이동**은 CSR에 비해 느림

### 클라이언트 사이드 렌더링(CSR)

* 특징
    * **렌더링은 클라이언트**에서 이루어짐
    * CSR로 생성한 앱의 HTML은 div하나로 구성
    * 빌드 과정에서 js와 css파일을 HTML페이지에 불러오도록 만들고 root div에 렌더링
* 장점
    * 네이티브 앱처럼 느껴지는 웹 앱
        * **전체 자바스크립트 번들을 다운로드**한다는 것은 **렌더링할 페이지가 모두 다운 되어있다는 뜻**
    * 쉬운 페이지전환
        * **페이지 전환에 효과 삽입** 가능, 애니메이션을 방해할 요소가 없기 때문
    * 지연된 로딩과 성능
        * **최소로 필요한 HTML만 렌더링**
        * 버튼을 누르면 나오는 모달도 실제 버튼이 눌렀을 때 동적으로 생성되게 함
    * 서버 부하 감소
* 단점
    * **네트워크 속도가 느린 환경**에서는 번들이 다운로드 될 때까지 빈 페이지가 보여지며, 검색 로봇도 마찬가지
    * 번들을 모두 다운 받을 때까지 성능 점수가 낮아질 것

### 정적 사이트 생성(SSG)

* 장점
    * 쉬운확장
        * **CDN을 통해 파일을 제공**하거나 **캐시에 저장**하기 쉬움
    * 뛰어난 성능
        * 클라이언트나 서버가 무언가를 처리할 필요가 없음
    * 더 안전한 API 요청
        * 외부 API 호출, 데이터베이스 접근, 보호해야할 데이터 접근할 일이 없음
        * 모든 정보가 빌드 시점에 미리 페이지로 렌더링 되어 있기 때문