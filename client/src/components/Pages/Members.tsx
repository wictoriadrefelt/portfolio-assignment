import { Flex, Text } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import MemberCard from "../MemberCard";

const Members: FC = () => {
  return (
    <Flex direction="column">
      <Text>Lista på alla medlemmar</Text>
      {/* Exempel Link. Slug skall vara dynamiskt sedan */}
      <Flex>
        <MemberCard member={member} />
      </Flex>

      <Link to={"/members/wictoria"}>Wictoria</Link>
    </Flex>
  );
};

export default Members;
