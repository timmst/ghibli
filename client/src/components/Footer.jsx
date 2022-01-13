import { styled } from "@mui/material/styles";
import githubIcon from "../assets/github120.png";

const FooterContainer = styled("div")({
  display: "flex",
  flexBasis: "70px",
  // minHeight: "1vh",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  left: "0",
  bottom: "0",
  height: "10px",
  color: "#FFFFFF",
  backgroundColor: "#333333",
  fontSize: 20,
  fontFamily: "Roboto",
  marginTop: "auto",
});

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="https://github.com/timmst/ghibli" title="GitHub">
          <img alt="missing" src={githubIcon} width="30px" />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
