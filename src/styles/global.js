import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	outline: 0px;
	font-family: "Gilroy-Regular";
}


.fix-body{
	overflow: hidden;
}

.scroll-y{
	&::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	&::-webkit-scrollbar:vertical {
		width: 5px;
	}

	&::-webkit-scrollbar:horizontal {
		height: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(89,92,118,0.5);
		
	}

	&::-webkit-scrollbar-track {
		
		background-color: rgba(255,255,255, 0.1);
	}
}

#root{
	width: 1440px;
    margin-left: auto;
    margin-right: auto;
	overflow: hidden;
}

a,button{
	text-decoration: none;
	outline: none;
	border: none;
	cursor: pointer;
}

.container{
	width: 1216px;
	margin-left: auto;
	margin-right: auto;
}


li{
	list-style: none;
}

body{
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
	/* font-family: Montserrat; */
}


`;
