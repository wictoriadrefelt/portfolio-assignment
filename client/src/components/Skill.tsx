import { Box, Flex, Text, Title } from "@mantine/core";
import { IconStar } from "@tabler/icons";
import { FC } from "react";
import { Skill as SkillType } from "./Pages/Members";

interface Props {
  skill: SkillType;
}
const Skill: FC<Props> = (props) => {
  return (
    <Flex mt={10} direction={"column"}>
      <Title mb={3} order={6}>
        {props.skill.skill}
      </Title>
      <Flex mr={10} pb={10}>
        {Array.from(Array(props.skill.stars), (e, i) => {
          return (
            <IconStar
              style={{ marginRight: "5px" }}
              size={15}
              color="#D5B19B"
              fill="#D5B19B"
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Skill;
