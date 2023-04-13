import React, { useState } from 'react';
import {
  StyledCarousel,
  StyledNextButton,
  StyledPreviousButton,
} from '@/components/Carousel/styled';

export type CarouselProps = {
  items: React.ReactElement[];
  numberOfItemsPerSlide: number;
};

export function Carousel({ items, numberOfItemsPerSlide }: CarouselProps) {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handlePreviousButtonClick = () => {
    const newIndex = sectionIndex - 1;

    if (newIndex >= 0) {
      setSectionIndex(newIndex);
    }
  };

  const handleNextButtonClick = () => {
    const newIndex = sectionIndex - 1;

    if (newIndex > sections.length) {
      setSectionIndex(newIndex);
    }
  };

  return (
    <StyledCarousel>
      <StyledPreviousButton onClick={handlePreviousButtonClick} />
      {sections[sectionIndex]}
      <StyledNextButton onClick={handleNextButtonClick} />
    </StyledCarousel>
  );
}
