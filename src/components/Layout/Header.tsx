import { Box, Header as MantineHeader, Text } from "@mantine/core";
import { FC } from "react";

const Header: FC = () => {
  return (
    <MantineHeader
      p={16}
      withBorder={false}
      height={60}
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box
        sx={{ width: "100%", maxWidth: 1680, backgroundColor: "whitesmoke" }}
      >
        <Text>Header</Text>
      </Box>
    </MantineHeader>
  );
};

export default Header;
