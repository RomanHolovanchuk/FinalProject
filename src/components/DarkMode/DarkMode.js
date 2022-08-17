import React,{useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { changeImage } from "store/reducers/changeImage";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const DarkMode = () => {
  const dispatch = useDispatch();
 


  const [theme, setTheme] = useState(true);

  const themeToggler = () => {
    theme === true ? setTheme(false) : setTheme(true);
    dispatch(changeImage())
  };

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <GlobalStyles />

      <StyledApp>
        <div theme={theme === true ? lightTheme : darkTheme}>
          <div className="container">
            <span className='darkTheme__span' style={{ color: theme ? "yellow" : "grey" }}>☀︎</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input type="checkbox" onChange={() => themeToggler()} />
                <span className="slider round"> </span>
              </label>
            </div>
            <span className='darkTheme__span' style={{ color: theme ? "grey" : "#c96dfd" }}>☽</span>
          </div>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default DarkMode;
