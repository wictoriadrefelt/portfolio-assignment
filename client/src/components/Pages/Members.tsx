import {
  Box,
  CSSObject,
  Flex,
  Grid,
  MantineTheme,
  Select,
  Title,
  Text,
} from "@mantine/core";
import { IconAdjustments } from "@tabler/icons";
import { FC, useEffect, useRef, useState } from "react";
import MemberCard from "../MemberCard";
import { useDocumentTitle } from "../pageTitle";

export type Skill = {
  skill: string;
  stars: number;
};

export type Member = {
  id: string;
  image: string;
  mail: string;
  name: string;
  phone: string;
  presentation: string;
  slug: string;
  title: string;
  skills: Skill[];
};

const skills = [
  { value: ".Net", label: ".Net" },
  { value: "Cypress", label: "Cypress" },
  { value: "Design", label: "Design" },
  { value: "Next.js", label: "Next.js" },
  { value: "Node.js", label: "Node.js" },
  { value: "PHP", label: "PHP" },
  { value: "Python", label: "Python" },
  { value: "React", label: "React" },
  { value: "Typescript", label: "Typescript" },
  { value: "Wordpress", label: "Wordpress" },
  { value: "WooCommerce", label: "WooCommerce" },
];

const Members: FC = () => {
  useDocumentTitle("Vårt Team");
  const valueRef = useRef<string | null>();
  const [members, setMembers] = useState<Member[] | undefined>([]);
  const [filteredMembers, setFilteredMembers] = useState<Member[] | undefined>(
    []
  );
  const [value, setValue] = useState<string | null>(null);

  valueRef.current = value;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:4000/api/members");
        let result = await response.json();
        if (result) {
          setMembers(result);
          setFilteredMembers(result);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  let list: Member[] = [];
  useEffect(() => {
    let valueCopy = valueRef.current;
    const filterList = () => {
      members?.forEach((member) => {
        member.skills.forEach((skill) => {
          if (skill.skill === valueCopy) {
            let checkList = list.find(
              (listItem) => listItem.name == member.name
            );
            if (!checkList) {
              list.push(member);
              return;
            }
            return;
          }
        });
      });
      setFilteredMembers(list);
    };
    filterList();
  }, [value]);

  return (
    <Flex mt="xl" direction="column" align="center" sx={mainContainer}>
      <Title order={1}>Medlemmar</Title>
      <Flex
        pr="xs"
        justify="flex-end"
        sx={(theme) => ({
          width: "100%",
          [theme.fn.smallerThan("xs")]: {
            justifyContent: "center",
            paddingRight: "0px",
          },
        })}
      >
        <Box
          mt="xl"
          sx={(theme) => ({
            width: "145px",
            [theme.fn.smallerThan("xs")]: {},
          })}
        >
          <Select
            styles={(theme) => ({
              dropdown: {
                color: theme.colors.brand[4],
              },
              item: {
                color: theme.colors.brand[4],
              },
              withIcon: {
                color: theme.colors.brand[4],
              },
              icon: {
                color: theme.colors.brand[3],
              },
            })}
            size="sm"
            icon={<IconAdjustments />}
            placeholder="Filter.."
            value={value}
            onChange={setValue}
            data={skills}
            radius="lg"
          />
        </Box>
      </Flex>

      <Flex
        mt="xl"
        direction="column"
        sx={(theme) => ({
          width: "100%",
          [theme.fn.smallerThan("xs")]: {
            marginTop: "0px",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            alignContent: "flex-end",
          }}
        ></Box>
        <Grid justify="space-around" align="center" gutter="xs">
          {filteredMembers?.map((member, index) => {
            return (
              <Grid.Col
                key={index}
                sx={gridColumnContainer}
                xs={5}
                sm={4}
                md={4}
                lg={3}
              >
                <MemberCard member={member} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

const mainContainer = (theme: MantineTheme): CSSObject => ({
  [theme.fn.smallerThan("sm")]: {
    marginTop: "40px",
  },
  [theme.fn.smallerThan("xs")]: {
    marginTop: "20px",
  },
});

const gridColumnContainer = (theme: MantineTheme): CSSObject => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default Members;
