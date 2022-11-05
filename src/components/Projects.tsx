import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { AiOutlineDesktop, AiOutlineGithub } from "react-icons/ai";

export const Projects = ({ data }) => (
  <Stack spacing={8} w="100%">
    <Heading
      fontSize="3xl"
      textAlign={{ base: "center", sm: "left" }}
      color="blue.500"
    >
      Things I Have Built
    </Heading>
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={{ base: "2rem", md: "4rem" }}
      justifyContent="center"
      alignItems="center"
    >
      {data.projects.map((project) => (
        <Stack
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          key={project.id}
          spacing={4}
          borderRadius="md"
        >
          <Box
            minW={200}
            minH={[250, 300, 300, 400]}
            pos="relative"
            overflow="hidden"
          >
            <NextImage
              src={project.screenshot}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 50vw, 100vw"
              style={{
                borderRadius: "0.375rem 0.375rem 0 0",
                objectFit: "cover",
              }}
              priority
            />
          </Box>
          <Stack spacing={4} p="1rem" pt="0">
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
              {project.name}
            </Text>
            <Text>{project.description}</Text>
            <Flex wrap="wrap">
              {project.techs.map((tech) => (
                <Text fontWeight="semibold" key={tech} color="teal.700" pr={4}>
                  {tech}
                </Text>
              ))}
            </Flex>
            <HStack justify="end">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  aria-label="View source code on github"
                  isExternal
                >
                  <IconButton
                    icon={<AiOutlineGithub />}
                    fontSize="24px"
                    colorScheme="gray"
                    aria-label="Github icon"
                    variant="ghost"
                  />
                </Link>
              )}
              <Link
                href={project.liveUrl}
                aria-label="View live site"
                isExternal
              >
                <IconButton
                  icon={<AiOutlineDesktop />}
                  fontSize="24px"
                  colorScheme="blue"
                  aria-label="Desktop icon"
                  variant="ghost"
                />
              </Link>
            </HStack>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  </Stack>
);
