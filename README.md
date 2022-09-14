# 🎉 원티드 프리온보딩 프론트엔드 코스 4차 과제

## 과제 소개
- 목표 : 깃허브 API 활용한 Angular 레포지토리 ISSUE 조회
- 작업기간 : 2022.09.13 ~ 2022.09.15

<br/>

## 배포 링크

https://hotsix-thingsflow.netlify.app/

<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|

<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```
<br />

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-thingsFLow.git
```
dependencies를 설치합니다
```markdown
$ npm install
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── tsconfig.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── assets
    ├── components
    ├── pages
    ├── routes
    ├── store
    ├── styles
    ├── App.jsx
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|assets|더미 및 이미지 등 로컬 파일|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|store|context API 활용한 sotre 폴더|
|styles|전역으로 사용하는 style 관리 폴더|

<br/>

## 과제범위

1. 이슈 목록 화면
    - 이슈 목록 가져오기 API 활용
    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
    - 다섯번째 셀에는 광고 이미지 출력
        - 광고 이미지 클릭 시 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home)로 이동
    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

1. 이슈 상세 화면
    - 이슈의 상세 내용 표시
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
    
2. 공통 헤더
    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.

## 요구사항

- 필수 요구 사항
    - 이슈 목록 및 상세 화면 기능 구현
    - Context API를 활용한 API 연동
    - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
    - 데이터 요청 중 로딩 표시
    - UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현

- 선택 사항
    - 에러 화면 구현
    - CSS-in-JS 구현
    
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br />

## Best Practice

### 1. 컴포넌트에서 tSX 파일과 styled-component 파일을 분리했습니다.  

💡 이유 : styled-componet 파일이 길어지면서 한 파일 내에서 JSX 코드와 CSS 코드를 동시에 보기가 어려워져, 가독성을 위해 분리하였습니다. 추가적으로 style 컴포넌트에는 앞에 S.을 포함해 네이밍을 하여, 일반 컴포넌트와 구분하였습니다.

### 2. 공통적으로 쓰는 컴포넌트를 Layout(/src/components/common/layout) 안에서 구성하고 Routes 파일에 적용했습니다. (Navigation, Footer, Header).  

💡 이유 : 최대한 코드 양을 줄이기 위해서 이며, 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하되기 때문입니다. 또한, import의 빈도도 줄일수 있습니다.

### 3. 많은 컴포넌트, 코드를 export 해서 관리해야 하는 경우 index.ts 파일을 만들어 import 경로를 줄였습니다.  

💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기때문입니다. 이를 줄이기 위해 각 root 폴더에 index.js 파일을 만들어 export default 핸들링을 했습니다.

### 4. 불필요한 Dispatch를 없애고, Store에 메서드를 정의했습니다.  

💡 이유 : Provider를 통해 넘겨받은 메서드를 무한스크롤에 사용할때 페이지를 넘겨받아야 했습니다. 이를 scrollLists메서드를 정의해 api를 호출해서 UI에 관여하는 상태에 관여할수 있도록 구성했습니다.  

### 5. 공통되게 사용되는 Header 컴포넌트와 같은 곳은 저장한 context의 value를 사용할수 있도록 했습니다.  

💡 이유 : prop drilling 혹은 api 호출 횟수를 줄이기 위해 context에 저장한 value를 사용할수 있도록 만들었습니다.  

### 6. 존재하지 않는 url로 강제 이동시 에러페이지 처리했습니다.  

💡 이유 : 존재하지 않는 url로 이동시 웹 나가는걸 방지하기 위해 에러페이지를 생성했고 에러페이지내에 메인페이지로 이동가능하게끔 해서 이탈을 방지했습니다.  

### 7. 웹과 모바일 모두 읽기 편하게 구현하기위해 max-width를 두고 이외엔 width 100%를 줬습니다.  

💡 이유 : 모바일과 웹화면을 반응형으로 설계해도 좋지만, max width를 두고 그외엔 width를 100%로 주게되면 모바일에서도 화면이 가득차서 보기 편하고 웹화면에서도 어색하지 않을거라 생각했습니다.  

### 8. 디테일 페이지에서 close된 이슈넘버를 받을 시 에러처리  

💡 이유 : 이슈리스트의 state==='open' 이므로 상태를 맞춰야하므로 state==='closed'는 에러처리 하였습니다.
