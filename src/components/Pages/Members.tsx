import { Text } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

const Members: FC = () => {
  return (
    <div>
      <Text>Lista på alla medlemmar</Text>
      {/* Exempel Link. Slug skall vara dynamiskt sedan */}
      <Link to={"/members/wictoria"}>Wictoria</Link>
    </div>
  );
};

export default Members;
