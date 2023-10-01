import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

const Container = styled.div`
  position: absolute;
  background: black;
  color: white;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
`;
function Apple() {
  return (
    <Container>
      <Header />
      <Section />
      <Footer />
    </Container>
  );
}

export default Apple;
