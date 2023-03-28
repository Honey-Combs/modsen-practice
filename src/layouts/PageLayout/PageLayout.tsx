import React from 'react';
import { StyledPageLayout } from './styled';

export type PageLayoutProps = {
  children?: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <StyledPageLayout>{children}</StyledPageLayout>;
}
