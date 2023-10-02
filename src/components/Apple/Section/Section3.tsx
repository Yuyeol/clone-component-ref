import styled from "@emotion/styled";

const Container = styled.div``;
const Description = styled.p`
  color: #a1a1a6;
`;
const Highlight = styled.span`
  color: white;
`;

const Section3 = () => {
  return (
    <Container>
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
};

export default Section3;
