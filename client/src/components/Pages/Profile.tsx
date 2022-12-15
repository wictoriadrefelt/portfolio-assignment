import { Box, Button, Flex, Text, Title } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons";
import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfilePicture from "../profilePicture";
import { Member } from "./Members";

const Profile: FC = () => {
  const { slug } = useParams();
  const [member, setMember] = useState<Member>();
  const imagePath = "/src/assets/" + member?.image;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:4000/api/members/" + slug);
        let result = await response.json();
        if (result) {
          setMember(result);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Flex mt={100}>
      <Flex
        direction={"column"}
        justify="center"
        align="center"
        sx={{ width: "50%" }}
      >
        <ProfilePicture imagePath={imagePath} />
        <Text w={300} mt="lg">
          {member?.presentation}
        </Text>
      </Flex>
      <Flex direction="column" sx={{ width: "50%" }}>
        <Title mb={5}>{member?.name}</Title>
        <Text size="lg">{member?.title}</Text>
        <Flex mt="xs">
          <IconPhone /> <Text ml="xs">{member?.phone}</Text>
        </Flex>
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:" + member?.mail;
            e.preventDefault();
          }}
        >
          <Flex mt={5}>
            <IconMail /> <Text ml="xs"> {member?.mail}</Text>
          </Flex>
        </Link>
        <Flex direction="column" mt="xl">
          <Title order={2}>Skills</Title>
          <Text>Här kommer skills sedan</Text>
        </Flex>
        <Flex w={"100%"} justify="flex-end" mr="xl">
          <Button mr={100}>Kontakta oss</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
