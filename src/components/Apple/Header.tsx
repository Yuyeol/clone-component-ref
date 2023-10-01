import styled from "@emotion/styled";

const Container = styled.header<Pick<IProps, "height">>`
  background: rgba(0, 0, 0, 0.7);
  height: ${({ height }) => height}px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 10;
`;
const LogoWrapper = styled.div`
  width: 25px;
  margin-top: 6px;
  margin-right: 5px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  z-index: 1;
`;
interface IProps {
  height: number;
}
function Header({ height }: IProps) {
  return (
    <Container height={height}>
      <LogoWrapper>
        <img src="/img/cups/02.png" alt="logo" />
      </LogoWrapper>
      <Text>콤팩트 리퀴드 필-드</Text>
    </Container>
  );
}

export default Header;
