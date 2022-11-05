import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { NextChakraLink } from "./NextChakraLink";
import { Socials } from "./Socials";

export const Header = () => {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Flex
      w="100%"
      maxWidth="96rem"
      justify="space-between"
      align="center"
      p="1rem"
    >
      <NextImage
        src="/logo.svg"
        alt="Yogesh Sherpa logo"
        height={40}
        width={40}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />
      {isLargerThan640 ? (
        <>
          <HStack spacing={8}>
            <NextChakraLink
              href="/projects"
              fontSize="2xl"
              fontWeight={router.asPath === "/projects" ? "bold" : "normal"}
              textDecor={router.asPath === "/projects" ? "underline" : ""}
              _hover={{
                textDecor: "underline",
              }}
            >
              Projects
            </NextChakraLink>
            <NextChakraLink
              href="/resume"
              fontSize="2xl"
              fontWeight={router.asPath === "/resume" ? "bold" : "normal"}
              textDecor={router.asPath === "/resume" ? "underline" : ""}
              _hover={{
                textDecor: "underline",
              }}
            >
              Resume
            </NextChakraLink>
            <NextChakraLink
              href="/contact"
              fontSize="2xl"
              fontWeight={router.asPath === "/contact" ? "bold" : "normal"}
              textDecor={router.asPath === "/contact" ? "underline" : ""}
              _hover={{
                textDecor: "underline",
              }}
            >
              Contact
            </NextChakraLink>
          </HStack>
          <Socials />
        </>
      ) : (
        <Flex>
          <HamburgerIcon w={6} h={6} onClick={onOpen} />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                p="1rem"
                display="flex"
                alignItems="center"
                justifyContent="end"
              >
                <CloseIcon onClick={onClose} />
              </DrawerHeader>
              <DrawerBody fontSize="lg">
                <Stack align="center" spacing={4} divider={<StackDivider />}>
                  <NextChakraLink
                    href="/projects"
                    onClick={onClose}
                    fontSize="2xl"
                  >
                    Projects
                  </NextChakraLink>
                  <NextChakraLink
                    href="/resume"
                    onClick={onClose}
                    fontSize="2xl"
                  >
                    Resume
                  </NextChakraLink>
                  <NextChakraLink
                    href="/contact"
                    onClick={onClose}
                    fontSize="2xl"
                  >
                    Contact
                  </NextChakraLink>
                  <Socials />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </Flex>
  );
};
