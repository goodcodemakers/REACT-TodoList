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
