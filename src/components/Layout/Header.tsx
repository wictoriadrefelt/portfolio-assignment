import { Header as MantineHeader, Text } from "@mantine/core";
import { FC } from "react";

const Header: FC = () => {
  return (
    <MantineHeader height={60}>
      <Text>Header</Text>
    </MantineHeader>
  );
};

export default Header;
