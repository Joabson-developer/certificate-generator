import styled from "styled-components";

type TextProps = {
  size?: number;
};

const H1 = styled.h1`
  font-size: 48pt;
`;
const H2 = styled.h2`
  font-size: 36pt;
`;
const P = styled.p`
  font-size: ${({ size = 36 }: TextProps) => size}pt;
  text-indent: 50pt;
  text-align: justify;
`;
const SPAN = styled.span`
  font-size: ${({ size }: TextProps) => size}pt;
`;

const Text = {
  H1,
  H2,
  P,
  SPAN,
};

type ImageProps = {
  size?: number;
};

const ImageContainer = styled.div`
  position: absolute;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

  z-index: -1;

  & :nth-child(1) {
    justify-self: start;
  }

  & :nth-child(2) {
    justify-self: center;
  }

  & :nth-child(3) {
    justify-self: end;
  }
`;

const Image = styled.img`
  width: ${({ size = 100 }: ImageProps) => size * 3}%;
  align-self: flex-start;
`;

const HR = styled.hr`
  width: 100%;
  border-width: 3px;
  opacity: 1;
  border-radius: 2px;
  margin-bottom: 5px;
`;

type TagProps = ImageProps;
const Tag = styled.div`
  aspect-ratio: 1;
  position: relative;
  width: ${({ size }: TagProps) => size}%;

  & > * {
    position: absolute;
    left: 50%;
    top: calc(50% + 70px);
    transform: translate(-50%, -50%);
  }
`;

const Download = styled.button`
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 20px;
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 999;
  scale: 0.9;
  transition: all 0.3s ease-in-out;
  color: #fff;
`;

export { Text, HR, ImageContainer, Image, Tag, Download };
