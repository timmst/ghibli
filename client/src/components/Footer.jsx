import { styled } from "@mui/material/styles";

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
  backgroundColor: "#2A3942",
  fontSize: 20,
  fontFamily: "Roboto",
  marginTop: "auto",
});

const Footer = () => {
  return <FooterContainer>Made by timmst</FooterContainer>;
};

export default Footer;
