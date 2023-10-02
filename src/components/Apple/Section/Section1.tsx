import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const FixedText = styled.p`
  position: fixed;
  display: none;
`;

const Section1 = () => {
  return (
    <Container>
      <p>Compact Liquid Filled</p>
      <FixedText>128mm</FixedText>
      <FixedText>그냥 커피잔</FixedText>
      <FixedText>간결하게,</FixedText>
      <FixedText>유려하게.</FixedText>
    </Container>
  );
};

export default Section1;
