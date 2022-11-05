import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";

const ThankYou = () => {
  const router = useRouter();

  return (
    <Layout title="Thank You">
      <Stack spacing={8} align="center">
        <Heading fontSize="2xl">
          {router.query.name}, thank you for contacting me!
        </Heading>
        <Text fontSize="lg">
          I will get back to you as soon as possible. Have a great day!
        </Text>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="blue"
          variant="solid"
          onClick={() => router.push("/")}
        >
          Back to homepage
        </Button>
      </Stack>
    </Layout>
  );
};

export default ThankYou;
