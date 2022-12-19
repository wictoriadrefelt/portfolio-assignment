import { Title, Text, Center, Flex } from "@mantine/core";
import { FC } from "react";

const Login: FC = () => {
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
