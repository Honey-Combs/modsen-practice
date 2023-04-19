import React, { useState } from 'react';
import { StyledCarousel, StyledButton } from '@/components/Carousel/styled';

export type CarouselProps = {
  children?: React.ReactElement[];
  numberOfItemsToDisplay: number;
  step: number;
};

export function Carousel({
  children = [],
  step,
  numberOfItemsToDisplay,
}: CarouselProps) {
  const [itemIndex, setItemIndex] = useState(0);

  const handlePreviousButtonClick = () => {
    const newIndex = itemIndex - step;

    if (newIndex >= 0) {
      setItemIndex(newIndex);
    }
  };

  const handleNextButtonClick = () => {
    const newIndex = itemIndex + step;

    if (newIndex > numberOfItemsToDisplay) {
      setItemIndex(children.length - numberOfItemsToDisplay);
    } else {
      setItemIndex(newIndex);
    }
  };

  return (
    <StyledCarousel>
      <StyledButton onClick={handlePreviousButtonClick}>&lt;</StyledButton>
      {children.slice(itemIndex, numberOfItemsToDisplay + itemIndex)}
      <StyledButton onClick={handleNextButtonClick}>&gt;</StyledButton>
    </StyledCarousel>
  );
}
