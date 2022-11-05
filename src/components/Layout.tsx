import { Center } from "@chakra-ui/react";
import Head from "next/head";
import * as React from "react";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => (
  <Container>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Main>
      <Center w="100%">{children}</Center>
    </Main>
    <Footer />
  </Container>
);
