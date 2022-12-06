import { Footer as MantineFooter, Text } from "@mantine/core";
import { FC } from "react";

const Header: FC = () => {
  return (
    <MantineFooter height={"auto"}>
      <Text>Footer</Text>
    </MantineFooter>
  );
};

export default Header;
