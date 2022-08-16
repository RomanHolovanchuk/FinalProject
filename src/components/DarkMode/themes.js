import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    
	}
  a{
    color: ${(props) => props.theme.fontColor};
  }
  .header{
    background-color: ${(props) => props.theme.body};
  }
  .header__tags{
    background-color: ${(props) => props.theme.fontColor};
  }
  // .burger_links{
  //   color: ${(props) => props.theme.body};
  // }
  // .menu_contents{
  //   background-color: ${(props) => props.theme.fontColor} ;
  //   color: ${(props) => props.theme.body};
  // }
  .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
    background-color: ${(props) => props.theme.body} !important;
    color: ${(props) => props.theme.fontColor} !important;
} 
.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
  color: ${(props) => props.theme.fontColor} !important;
  
}
.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root{
  color: ${(props) => props.theme.fontColor} !important;
}
.form__label{
  color: ${(props) => props.theme.fontColor} !important;
}
.css-1x51dt5-MuiInputBase-input-MuiInput-input{
  color: ${(props) => props.theme.fontColor} !important;
}
.css-1tcs2i1-MuiInputBase-root-MuiInput-root:before{
  border-bottom: 1px solid ${(props) => props.theme.fontColor} !important;
}
.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
  border: 1px solid ${(props) => props.theme.fontColor} !important;
}

`;
