import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  MediaQuery,
  Text,
  Title,
  Grid,
} from "@mantine/core";
import { IconArrowLeft, IconMail, IconPhone } from "@tabler/icons";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProfilePicture from "../ProfilePicture";
import Skill from "../Skill";
import { Member } from "./Members";

const Profile: FC = () => {
  const { slug } = useParams();
  const [member, setMember] = useState<Member>();
  const imagePath = "/src/assets/" + member?.image;
  const navigate = useNavigate();

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
    <>
      <MediaQuery
        smallerThan="sm"
        styles={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Flex
          mt={100}
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              marginTop: 30,
            },
          })}
        >
          <Flex direction={"column"} align="center" sx={{ width: "50%" }}>
            <ProfilePicture imagePath={imagePath} />
            <MediaQuery
              smallerThan="sm"
              styles={{
                display: "none",
              }}
            >
              <Text w={300} mt="lg">
                {member?.presentation}
              </Text>
            </MediaQuery>
          </Flex>
          <Flex
            direction="column"
            sx={(theme) => ({
              width: "50%",
              [theme.fn.smallerThan("sm")]: {
                width: "90%",
                marginTop: theme.spacing.lg,
                alignItems: "center",
              },
            })}
          >
            <Title mb={5}>{member?.name}</Title>
            <Text size="lg">{member?.title}</Text>
            <Flex
              mt="xs"
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <IconPhone /> <Text ml="xs">{member?.phone}</Text>
            </Flex>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:" + member?.mail;
                e.preventDefault();
              }}
            >
              <Flex
                mt={5}
                sx={(theme) => ({
                  [theme.fn.smallerThan("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
                  },
                })}
              >
                <IconMail /> <Text ml="xs"> {member?.mail}</Text>
              </Flex>
            </Link>
            <MediaQuery
              largerThan="sm"
              styles={{
                display: "none",
              }}
            >
              <Text w={300} mt="lg" align="center">
                {member?.presentation}
              </Text>
            </MediaQuery>
            <Flex
              direction="column"
              mt="xl"
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  alignItems: "center",
                },
              })}
            >
              <Title order={2}>Skills</Title>
              <Flex
                w={300}
                align={"center"}
                sx={(theme) => ({
                  [theme.fn.smallerThan("sm")]: {
                    marginTop: theme.spacing.xs,
                  },
                })}
              >
                <Grid>
                  {member?.skills.map((skill) => {
                    return (
                      <Grid.Col span={6}>
                        <Skill skill={skill} />
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </Flex>
            </Flex>
            <Flex
              w={"100%"}
              justify="flex-end"
              mr="xl"
              mt={70}
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  marginRight: "0px",
                  justifyContent: "center",
                },
              })}
            >
              {/* "Gå tillbaka ligger här temporärt" */}
              <Flex
                mr="sm"
                align="center"
                color="brand.4"
                onClick={() => navigate(-1)}
                sx={(theme) => ({
                  cursor: "pointer",
                  [theme.fn.smallerThan("sm")]: {},
                })}
              >
                <IconArrowLeft />{" "}
                <Text size="xs" color="brand.4">
                  Gå tillbaka
                </Text>
              </Flex>
              <Link to={"/contact"}>
                <Button
                  mr={100}
                  sx={(theme) => ({
                    [theme.fn.smallerThan("sm")]: {
                      marginRight: "0px",
                    },
                  })}
                >
                  Kontakta oss
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </MediaQuery>
    </>
  );
};

export default Profile;
