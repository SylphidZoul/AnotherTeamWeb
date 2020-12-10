import { createGlobalStyle } from 'styled-components'
import Quantum from '../fonts/Quantum.otf'
import Bits from '../fonts/8-bit-pusab.ttf'

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		@font-face {
			font-family: 'Quantum';
			src: url('${Quantum}') format('opentype');
		}
		@font-face {
			font-family: '8Bit';
			src: url('${Bits}') format('truetype');
		}
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
		margin: 0;
		padding: 0;
		border: 0;
	}
	body {
		line-height: 1;
		background-color: var(--mainDark);
		&::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
  background: var(--mainPink); 
  border-radius: 10px;
  border: 2px solid black;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--mainLightPink);
  } 
	}
	ol, ul {
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
	@media screen and (max-width: 400px) {
		height:100vh;
		weight:100vw;
	}
`
export default GlobalStyle
