import { Box, Button, Divider, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
// import logo from "../../src/assets/logo.svg";
// import { AllRoutingData } from "./RoutingDatas";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
function Header() {
  const navigate = useNavigate();
  let stickingTheHeader = React.useRef();
  React.useLayoutEffect(() => {
    const headerTag = document.querySelector(".head");
    const pageHeadFixed = stickingTheHeader.current.scrollTop;
    const fixedTheFinal = () => {
      if (window.scrollY > pageHeadFixed) {
        headerTag.classList.add("shrink");
      } else {
        headerTag.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", fixedTheFinal);
  }, []);
  return (
    <>
      <header className="head" ref={stickingTheHeader}>
        {/* <img src={logo} alt="img" /> */}
        <ul>
          <li>Home</li>
          <li>Component</li>
          <li>About Us</li>
          <li>Documentation</li>
          <li>Pages</li>
        </ul>

        <div className="btnGrp">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <LanguageIcon />
          </IconButton>

          <Divider orientation="vertical" variant="middle" flexItem />
          <button
            className="btn signin"
            onClick={() => navigate(AllRoutingData.SIGNIN)}
          >
            Sign In
          </button>
          <button
            className="btn signup"
            onClick={() => navigate(AllRoutingData.SIGNUP)}
          >
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
