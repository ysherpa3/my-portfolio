import { HStack, Icon, Link } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

export const Socials = () => (
  <HStack spacing={4}>
    <Link
      href="https://github.com/ysherpa3/"
      aria-label="Github profile"
      isExternal
      display="flex"
    >
      <Icon
        as={AiOutlineGithub}
        w={6}
        h={6}
        aria-label="Github icon"
        color="gray.500"
        _hover={{ color: "gray.700" }}
      />
    </Link>
    <Link
      href="https://twitter.com/ys3728/"
      aria-label="Twitter profile"
      isExternal
      display="flex"
    >
      <Icon
        as={AiOutlineTwitter}
        w={6}
        h={6}
        aria-label="Twitter icon"
        color="twitter.400"
        _hover={{ color: "twitter.600" }}
      />
    </Link>
  </HStack>
);
