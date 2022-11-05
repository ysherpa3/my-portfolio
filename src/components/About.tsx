import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  SiChakraui,
  SiGatsby,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    icon: SiJavascript,
    name: "JavaScript",
    color: "#fcdc00",
  },
  {
    id: 2,
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  { id: 3, icon: SiReact, name: "React", color: "#61dafb" },
  { id: 4, icon: SiGatsby, name: "Gatsby", color: "#663399" },
  { id: 5, icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  {
    id: 6,
    icon: SiChakraui,
    name: "Chakra UI",
    color: "#81e6d9",
  },
];

export const About = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 8, md: 12 }}
      align="center"
    >
      <Box minW={250} minH={250} pos="relative" overflow="hidden">
        <Image
          src="/images/photo.jpg"
          quality={90}
          fill
          sizes="250px"
          alt="Yogesh Sherpa photo"
          style={{
            borderRadius: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </Box>
      <Stack spacing={{ base: 3, sm: 4 }} maxW="600px">
        <Heading color="blue.500">Hello!</Heading>
        <Text fontSize="lg">
          My name is Yogesh. I am passionate about building things for the web.
          My interest in web development began in high school when I created my
          first website using HTML and CSS.
        </Text>
        <Text fontSize="lg">
          Lately, I have discovered my passion for React to build beautiful
          websites and applications. I am currently looking for a front-end web
          developer position to challenge myself and grow professionally.
        </Text>
        <Stack>
          <Text fontSize="lg">
            Technologies that I have been working with include:
          </Text>
          <HStack spacing={6} py={2}>
            {skills.map((skill) => (
              <VStack key={skill.id}>
                <Icon as={skill.icon} w={6} h={6} color={skill.color} />
                <Text
                  fontSize="sm"
                  display={isLargerThan768 ? "block" : "none"}
                >
                  {skill.name}
                </Text>
              </VStack>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
