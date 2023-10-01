import styled from "@emotion/styled";

const Container = styled.section``;
const ImgContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    right: 0;
    width: 100px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;
const Description = styled.p`
  color: #a1a1a6;
`;
const Highlight = styled.span`
  color: white;
`;
function Section() {
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
      <Title>
        <p>128mm</p>
        <p>Compact Liquid Filled</p>
        <p>잔. 간결하게, 유려하게.</p>
      </Title>
      <Description>
        <Highlight>걍 커피잔 12.8에서의 익스트림 다이내믹 레인지</Highlight>{" "}
        Compact Liquid Container는
        <br />
        1,000,000:1 다이아몬드, 세라믹 비율로 극한까지 내구성을 끌어 올렸습니다.
        <br />
        그래서 커피, 홍차, 말차, 보이차, 장갑차 등 어떤 것을 담기에도 제격이죠.
        <br />
        조명에 따라 1000 니트 전체 밝기와 1600 니트 부분 최대 밝기를 자랑합니다.
        <br />아 맞다, 그리고 첨단 보온 기술도 갖추고 있습니다.
      </Description>
    </Container>
  );
}

export default Section;
