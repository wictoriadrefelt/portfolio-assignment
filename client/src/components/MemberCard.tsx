import { Box, Text } from "@mantine/core";
import { FC } from "react";

type Member = {
  member: string;
};

interface Props {
  member: Member;
}
const MemberCard: FC<Props> = (props) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 1680, backgroundColor: "whitesmoke" }}>
      <Text>Membercard</Text>
    </Box>
  );
};

export default MemberCard;
