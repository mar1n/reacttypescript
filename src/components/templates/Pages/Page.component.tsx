import React from "react";
import { Container } from "./Page.styles";

interface PageProps {
  children: React.ReactNode;
}

function Page(props: PageProps): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default Page as React.FC<PageProps>;