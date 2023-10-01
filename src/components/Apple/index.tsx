import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";

const HEADER_HEIGHT = 50;
const Container = styled.div`
  position: absolute;
  background: black;
  color: white;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .header-height {
    height: ${HEADER_HEIGHT}px;
  }
`;
const Apple = () => {
  return (
    <Container>
      <Header height={HEADER_HEIGHT} />
      <div className="header-height" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Container>
  );
};

export default Apple;
