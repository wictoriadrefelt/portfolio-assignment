import { Title, Text, Center, Flex } from "@mantine/core";
import { FC, useEffect } from "react";
import { useDocumentTitle } from "../pageTitle";

const Login: FC = () => {
  useDocumentTitle("Login");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        mt="xl"
        wrap="wrap"
      >
        <Title order={2}>Pågående arbete</Title>
        <Text align="center">
          Här kommer det upp en fin inloggningssida inom kort :)
        </Text>
      </Flex>
    </>
  );
};

export default Login;
