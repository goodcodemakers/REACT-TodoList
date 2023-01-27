# REACT-TodoList

# Desc
- react로 만든 todo list
- styled-components 사용

# Image
![화면 캡처 2023-01-26 151936](https://user-images.githubusercontent.com/103430498/214770422-1bcfb97e-e7c3-41f3-ac5e-9e00e34adeab.png)

# Install

```bash
$ npm i
```

# Run 
```bash
$ npm start
```

## 주요 기능 

### font 추가
- react-01-25/src/style/fonts 디렉터리에 font.js와 사용할 폰트(NanumPenScriptRegular.ttf) 추가

```javascript
// (font.js)
import { createGlobalStyle } from "styled-components";
import NanumPenScriptRegular from "./NanumPenScriptRegular.ttf";

export default createGlobalStyle`
  @font-face {
    font-family : "NanumPenScriptRegular";
    src : local("NanumPenScriptRegular"),
    url(${NanumPenScriptRegular}) format("truetype");
    font-weight : 400;
  }
`;
```

### font 불러오기

```javascript
//(index.js)
import GlobalFonts from "./style/fonts/font";

// ......

// styled-components로 style 적용
const GlobalStyle = createGlobalStyle`
  html {
    font-size : 36px
  }
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  body,button,input {
    font-family: 'NanumPenScriptRegular';
  }
`;
```
