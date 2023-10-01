import styled from "@emotion/styled";

const Container = styled.section`
  padding: 0 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;
const FixedText = styled.p`
  position: fixed;
  display: none;
`;

const Section = () => {
  return (
    <Container>
      <Title>
        <p>Compact Liquid Filled</p>
        <FixedText>128mm</FixedText>
        <FixedText>그냥 커피잔</FixedText>
        <FixedText>간결하게,</FixedText>
        <FixedText>유려하게.</FixedText>
      </Title>
    </Container>
  );
};

export default Section;
