
## 1. Node.js 설치
gulp를 사용하기 위해서 node.js 를 다운로드 받기

* https://nodejs.org      ```
<-   v14.15.1 버전 설치(2020.12.07 기준) ```


node와 npm이 제대로 설치되었는지 확인

 ```
* [ 노드 버전 확인 ]   node -v
* [ npm 버전 확인 ]   npm -v
 ```



## 2. gulp 설치

``` 
npm install --global gulp-cli 
```
gulp를 사용하기 위해서는 npm을 통해 gulp-cli를 전역으로 설치
 ```
* [gulp 전역설치 버전확인]  gulp -v 
 ```


## 3. npm 의존 설치

```
npm install
```

## 4.package 실행

```
npm run dev
```

 
 ## Project 구조
 ```
 +-- project
 | +-- dist
 | +-- node_modules
 | +-- pagelist
 | | +-- css
 | | +-- data
 | | | +-- data.js (src > index.html 링크)
 | | +-- html
 | | +-- js
 | | | +-- lib
 | +-- src 
 | | +-- fonts
 | | +-- html
 | | | +-- include
 | | +-- js
 | | | +-- src
 | | +-- scss
 | | | +-- component
 | | | +-- fonts
 | | | +-- layout
 | | | +-- lib
 | | | +-- common.scss (scss > component > scss 링크)
 | | +-- index.html
 ```







< 설치 파일 >

### 1. 협업툴
```
1 협업 툴(Slack)업무 관련하여 상호 대화 및 정보 전달 시 사생활과 분리를 위하여 협업 툴인 slack을 사용하고 있습니다.
  https://slack.com/intl/en-kr/회원가입 후 관리자에게 아이디를 전달해 주시면 초대 후 사용 가능합니다.
```
### 2. 개발 파트 업무 준비 리스트
```  
2.1 Node와 webStorm을 설치해주세요. 
   - Node.jshttps://nodejs.org/ko/OJT_Node 문서 참고하여 디폴트 설정으로 설치해주세요.
   - webStromhttps://www.jetbrains.com/webstorm/디폴트 설정으로 설치해주세요.
   - Emmet 가이드 (https://www.jetbrains.com/help/webstorm/settings-emmet.html)
   
2.2 SVN Client https://tortoisesvn.net/OJT_SVN 문서 참고하여 64-bit Download 후 디폴트 설정으로 설치해주세요. 
    SVN에서 사용할 계정 정보(ID) 피드백 부탁드립니다.

2.3 Git 설치- https://git-scm.com/downloads 디폴트 설정으로 설치합니다.
    회원가입후 관리자에게 해당 이메일을 전달해주세요.

2.4 크롬 확장 프로그램 설치 크롬 확장 프로그램 Allow-Control-Allow-origin 바탕화면에 크롬 바로가기 아이콘을 생성합니다.
chrome.exe - 우클릭 [속성] - 대상 칸에 --allow-file-access-from-files를 입력합니다.
```

### 3. 디자인 파트 업무 준비 리스트
```
3.1  Zeplin-https://zeplin.io/- Zeplin 계정 가입 후 사용합니다.
- 설치 후 이메일 전달해 주시면 프로젝트 초대됩니다.
3.2  Adobe XD
- Adobe Creative Cloud 가입 후 프로그램 설치(무료) 합니다.
```


### 4.레이아웃 구조
```
 +-- header
 | +-- ~~~
 | 
 +-- container
 | +-- aside
 | +-- contents
 | +--- section_~~~
 | +--- contents
 | +--- section_~~~
 | 
 +-- footer
```

```
https://mail.eluocnc.com/?login_type=U
엘루오씨앤씨 링크
```
