import { Box, Flex, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Member } from "./Pages/Members";
import { createStyles } from "@mantine/core";

interface Props {
  member: Member;
}
const MemberCard: FC<Props> = (props) => {
  const imagePath = "/src/assets/" + props.member.image;
  const { classes } = useStyles();

  return (
    <Link to={"/members/" + props.member.slug}>
      <Flex
        direction="column"
        align="center"
        pb="xl"
        mt="xl"
        sx={{ width: "100%", "&:hover": {} }}
      >
        <img className={classes.image} src={imagePath} />
        <Title order={3} mt="xs">
          {props.member.name}
        </Title>
        <Text size="xs">{props.member.title}</Text>
      </Flex>
    </Link>
  );
};

const useStyles = createStyles((theme, _params, getRef) => ({
  image: {
    borderRadius: "50%",
    objectFit: "cover",
    height: "240px",
    width: "240px",
    "&:hover": {
      boxShadow: "0px 5px 10px" + theme.colors.brand[4],
    },
  },
}));

export default MemberCard;
