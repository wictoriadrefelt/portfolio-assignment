import { Box, Footer as MantineFooter, Text } from "@mantine/core";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <MantineFooter
      p={16}
      withBorder={false}
      height={"auto"}
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box
        sx={{ width: "100%", maxWidth: 1680, backgroundColor: "whitesmoke" }}
      >
        <Text>Footer</Text>
      </Box>
    </MantineFooter>
  );
};

export default Footer;
