import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => (
  <Flex
    minH="100vh"
    direction="column"
    justify="center"
    alignItems="center"
    bg="gray.50"
    color="black"
    _dark={{
      bg: "gray.900",
      color: "white",
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);
