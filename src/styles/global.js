import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	outline: 0px;
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

.container-form{
	position: relative;
	margin-bottom: 25px;
	&.dif{
		margin-bottom: 80px;	
	}
	&:last-child{
		margin-bottom: 25px;
	}
	label{
		font-family: ${(props) => props.theme.fonts.inter};
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 160%;	
		color: ${(props) => props.theme.colors.preto1};
		position: absolute;
		top: -12px;
		padding: 0px 10px;
		left: 19px;
		background-color: #fff;
		z-index: 20;
	}

	input,textarea{
		border: 1px solid rgba(89, 92, 118, 0.3) ;
		box-sizing: border-box;
		height: 46px;
		width: 100%;
		border-radius: 4px;	
		padding-left: 19px;

		font-family: ${(props) => props.theme.fonts.inter};
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 160%;
		color: ${(props) => props.theme.colors.preto1};
	}

	textarea{
		height: 151px;
		padding-top: 10px;
	}

	span{
		font-family: ${(props) => props.theme.fonts.inter};
		color: ${(props) => props.theme.colors.preto2};
		font-style: normal;
		font-weight: normal;
		font-size: 14px;	
	}
}

body{
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
	font-family: Montserrat;
	background-color: ${(props) => props.theme.colors.color01}
}


`;
