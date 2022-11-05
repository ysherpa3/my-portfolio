import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const contactInfo = [
  {
    id: 1,
    icon: AiOutlineMail,
    text: "ysherpa37@gmail.com",
    href: "mailto:ysherpa37@gmail.com",
  },
  {
    id: 2,
    icon: AiOutlinePhone,
    text: "703-895-3514",
    href: "tel:703-895-3514",
  },
  {
    id: 3,
    icon: AiOutlineGithub,
    text: "github.com/ysherpa3",
    href: "https://github.com/ysherpa3",
  },
];

export const Resume = ({ data }) => (
  <Stack spacing={8} w="100%" divider={<StackDivider />}>
    <Stack direction={{ base: "column", sm: "row" }} justify="space-around">
      {contactInfo.map((item) => (
        <Flex justify="center" align="center" key={item.id}>
          <Icon as={item.icon} color="blue.500" mr={2} w={5} h={5} />
          <Link href={item.href} isExternal>
            {item.text}
          </Link>
        </Flex>
      ))}
    </Stack>
    <Stack direction={{ base: "column", sm: "row" }} w="100%">
      <Heading
        fontSize="xl"
        pb={{ base: 6, sm: 0 }}
        color="blue.500"
        display="flex"
        minW={{ base: "100%", sm: "30%", md: "40%" }}
      >
        Experience
      </Heading>
      <Stack spacing={6} w="100%">
        {data.resume.experience.map((work: any) => (
          <Stack key={work.id}>
            <Text fontWeight="semibold">
              {work.title}{" "}
              <Text as="span" fontWeight="normal">
                {work.company ? `@ ${work.company}` : ""}
              </Text>
            </Text>
            <Text>{work.date}</Text>
            <List>
              {work.duties.map((duty: string) => (
                <ListItem key={duty}>
                  <ListIcon as={TriangleDownIcon} />
                  {duty}
                </ListItem>
              ))}
            </List>
          </Stack>
        ))}
      </Stack>
    </Stack>
    <Stack direction={{ base: "column", sm: "row" }} w="100%">
      <Heading
        fontSize="xl"
        pb={{ base: 6, sm: 0 }}
        color="blue.500"
        display="flex"
        minW={{ base: "100%", sm: "30%", md: "40%" }}
      >
        Education
      </Heading>
      <Stack spacing={6} w="100%">
        {data.resume.education.map((edu: any) => (
          <Stack key={edu.id}>
            <Text fontWeight="semibold">
              {edu.name}{" "}
              <Text as="span" fontWeight="light">
                in {edu.location}
              </Text>
            </Text>
            <Text>{edu.date}</Text>
            <Text>{edu.program}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
    <Stack direction={{ base: "column", sm: "row" }} w="100%">
      <Heading
        fontSize="xl"
        pb={{ base: 6, sm: 0 }}
        color="blue.500"
        display="flex"
        minW={{ base: "100%", sm: "30%", md: "40%" }}
      >
        Skills
      </Heading>
      <Stack spacing={6} w="100%">
        {data.resume.skills.map((skill: any) => (
          <Stack key={skill.id}>
            <Text fontWeight="semibold">{skill.name}</Text>
            <Text>{skill.list.map((skill: string) => skill).join(", ")}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  </Stack>
);
