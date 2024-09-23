import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../assets/fonts/alternative/Pretendard-Regular.ttf";
import LeeSeoyun from "../assets/fonts/LeeSeoyun.ttf";
export const GlobalStyle = createGlobalStyle`

  :root {
    --vh: 100%;
   }
   @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${PretendardRegular}) format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'LeeSeoyun';
    src: url(${LeeSeoyun}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
   

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, 
  a, abbr, acronym, address, big, cite, 
  del, em, strong, dfn,  img, ins, kbd, q, s, samp,
  small, strike,  sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
 

    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

  
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }


  html {
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}
}

body {
	width: 100%;
  min-height: 100vh;
	max-width: 540px;
	overflow-x: hidden;
  background-color: #fef7e2;

	/* font-family: "AppleSDGothicNeoL00", "AppleSDGothicNeoH00", "AppleSDGothicNeoB00", "AppleSDGothicNeoUL00", "AppleSDGothicNeoT0C", sans-serif; */
}




  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 위에가 styled-reset 내용 */

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    	
    -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
    -moz-text-size-adjust: none; /*Firefox*/
    -ms-text-size-adjust: none; /*Ie*/
    -o-text-size-adjust: none; /*old versions of Opera*/
    scroll-behavior: smooth;


  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
  select{
    border: none;
    &:focus {
      outline: none;
    }
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }


`;
