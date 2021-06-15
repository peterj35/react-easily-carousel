import React, { ComponentPropsWithoutRef, useCallback, useState } from "react";
import styled from "styled-components";
import { getValidChildren } from "../utils";

interface ICarouselProps extends ComponentPropsWithoutRef<"div"> {}

const Carousel: React.FC<ICarouselProps> = ({ children, ...props }) => {
  if (!children) {
    throw new Error("Define valid children for the Carousel");
  }

  const validChildren = getValidChildren(children);
  const numPanels = validChildren.length;

  const [index, setIndex] = useState(0);

  const handleLeftControlClick = useCallback(() => {
    setIndex((prev) => prev - 1);
  }, []);

  const handleRightControlClick = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  const showLeftControl = index > 0;
  const showRightControl = index < numPanels - 1;

  return (
    <Container {...props}>
      <Panels activePanelIndex={index}>
        {validChildren.map((child) => (
          <Panel key={child.key}>{child}</Panel>
        ))}
      </Panels>
      {showLeftControl ? (
        <LeftControl onClick={handleLeftControlClick} />
      ) : null}
      {showRightControl ? (
        <RightControl onClick={handleRightControlClick} />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Control = styled.button`
  position: absolute;
  top: 0;

  height: 100%;
  width: 20px;
  background-color: black;
  opacity: 0.5;
`;

const LeftControl = styled(Control)`
  left: 0;
`;

const RightControl = styled(Control)`
  right: 0;
`;

const Panels = styled.div<{ activePanelIndex: number }>`
  display: flex;
  transform: translate3d(
    ${(props) => props.activePanelIndex * -100}%,
    0px,
    0px
  );
`;

const Panel = styled.div`
  min-width: 100%;
  justify-content: center;
  text-align: center;
  place-self: center;

  margin: 0;
`;

export default Carousel;
