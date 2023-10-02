import styled from "@emotion/styled";

const Container = styled.div``;
const ImgContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    right: 0;
    width: 100px;
  }
`;
const Section2 = () => {
  return (
    <Container>
      <ImgContainer>
        <div>
          <img src="/img/cups/01.png" alt="cups" />
        </div>
        <div>
          <img src="/img/cups/02.png" alt="cups" />
        </div>
        <div>
          <img src="/img/cups/03.png" alt="cups" />
        </div>
        <div>
          <img src="/img/cups/04.png" alt="cups" />
        </div>
      </ImgContainer>
    </Container>
  );
};

export default Section2;
