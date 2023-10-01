import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

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
function Apple() {
  return (
    <Container>
      <Header height={HEADER_HEIGHT} />
      <div className="header-height" />
      <Section />
      <Footer />
    </Container>
  );
}

export default Apple;
