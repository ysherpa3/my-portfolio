import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Flex
    as="footer"
    py="2rem"
    maxWidth="96rem"
    w="100%"
    justify="center"
    align="center"
    mt="auto"
  >
    <Text fontSize="sm">&copy; {new Date().getFullYear()} Yogesh Sherpa</Text>
  </Flex>
);
