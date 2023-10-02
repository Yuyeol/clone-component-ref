import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import { useCallback, useEffect, useState } from "react";

const HEADER_HEIGHT = 50;
const Container = styled.div`
  position: absolute;
  background: black;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  .header-height {
    height: ${HEADER_HEIGHT}px;
  }
`;
const Section = styled.section<{ height: number }>`
  padding: 0 20px;
  height: ${({ height }) => height}px;
  border: 5px solid white;
  box-sizing: border-box;
`;

const Apple = () => {
  const [sectionHeight, setSectionHeight] = useState<number>(
    window.innerHeight * 5
  );
  const [currentSection, setCurrentSection] = useState<number>(0);
  console.log(currentSection);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const currentSection = Math.floor(scrollY / sectionHeight);
    setCurrentSection(currentSection);
  }, [sectionHeight]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleResize = () => {
    setSectionHeight(window.innerHeight * 5);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <Header height={HEADER_HEIGHT} />
      <div className="header-height" />
      <Section height={sectionHeight}>
        <Section1 />
      </Section>
      <Section height={sectionHeight}>
        <Section2 />
      </Section>
      <Section height={sectionHeight}>
        <Section3 />
      </Section>
      <Footer />
    </Container>
  );
};

export default Apple;
