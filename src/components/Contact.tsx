import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  name?: string;
  email?: string;
  message?: string;
};

const schema = yup
  .object({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    message: yup.string().required("Please enter your message"),
  })
  .required();

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = handleSubmit(
    (data: any, e: React.FormEvent<HTMLFormElement>) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data,
        }),
      })
        .then(() =>
          router.push(
            { pathname: "/thanks", query: { name: data.name } },
            "/thanks"
          )
        )
        .catch((error) => alert(error));

      e.preventDefault();
    }
  );

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Flex grow="1" justify="center">
      <Stack spacing={8} maxW="500px" w="100%">
        <Heading
          fontSize="3xl"
          textAlign={{ base: "center", sm: "left" }}
          color="blue.500"
        >
          Let's Get In Touch
        </Heading>
        <form
          onSubmit={onSubmit}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Stack>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" {...register("name")} />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" {...register("email")} />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" {...register("message")} />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Flex justify="center" mt={8}>
            <Button
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Sending"
              type="submit"
              maxW="150px"
              w="100%"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Stack>
    </Flex>
  );
};

export default Contact;
