import { Modal, Text, Title } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea, Box, Flex } from "@mantine/core";
import { Image } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../pageTitle";

const Contact: FC = () => {
  useDocumentTitle("Kontakt");
  const [opened, setOpened] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm({
    initialValues: { name: "", email: "", subject: "", textArea: "" },
    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.length < 2 ? "Subject must have at least 2 letters" : null,
      textArea: (value) =>
        value.length < 2 ? "Textarea must have at least 2 letters" : null,
    },
  });
  const handleClick = () => {
    if (
      form.values.name.length < 1 ||
      form.values.email.length < 1 ||
      form.values.textArea.length < 1
    ) {
      setSubmit(false);
      setOpened(true);
      setModalContent(false);
      return;
    }
    if (!/^\S+@\S+$/.test(form.values.email)) {
      setSubmit(false);
      setOpened(true);
      setModalContent(false);
      return;
    } else {
      setSubmit(true);
      setOpened(true);
      setModalContent(true);
      form.reset();
    }
  };

  return (
    <>
      <Title mt={40} sx={{ fontSize: "3em", textAlign: "center" }}>
        Kontakt
      </Title>
      <Flex
        sx={(theme) => ({
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          [theme.fn.smallerThan("md")]: {
            marginTop: "0px",
            flexWrap: "wrap",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            minWidth: 300,
            [theme.fn.smallerThan(856)]: {
              width: "70%",
              minWidth: "unset",
            },
            [theme.fn.smallerThan("sm")]: {
              width: "80%",
              minWidth: "unset",
            },
            [theme.fn.smallerThan("xs")]: {
              width: "90%",
            },
          })}
        >
          <form
            onSubmit={(e) => {
              form.onSubmit((values) => console.log(values));
              e.preventDefault();
            }}
          >
            <Title order={2} mt="xl" mb="md">
              Kontakta Oss
            </Title>

            <TextInput
              label="Namn"
              placeholder="Namn"
              autoFocus={true}
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput
              mt="xl"
              label="Email"
              placeholder="Email"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <TextInput
              mt="md"
              label="Ämne"
              placeholder="Ämne"
              withAsterisk
              {...form.getInputProps("subject")}
            />

            <Textarea
              minRows={6}
              placeholder="Ditt meddelande"
              label="Ditt meddelande"
              mt="md"
              size="md"
              withAsterisk
              {...form.getInputProps("textArea")}
              sx={{ hight: "900px" }}
            />

            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Information"
            >
              <Text>
                {modalContent
                  ? "Tack för ditt meddelande"
                  : "Var vänlig fyll i fälten korrekt"}
              </Text>
            </Modal>

            <Button
              type="submit"
              onClick={handleClick}
              mt="md"
              sx={(theme) => ({ backgroundColor: theme.colors.brand[4] })}
            >
              Skicka Meddelande
            </Button>
          </form>
        </Box>
        <Box
          mt="25px"
          sx={(theme) => ({
            minWidth: 300,
            [theme.fn.smallerThan(856)]: {
              width: "70%",
              minWidth: "unset",
            },
            [theme.fn.smallerThan("sm")]: {
              width: "80%",
              minWidth: "unset",
            },
            [theme.fn.smallerThan("xs")]: {
              width: "90%",
            },
          })}
        >
          <Title
            order={2}
            mt="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan("md")]: {
                marginLeft: "0px",
              },
            })}
          >
            Kontoret
          </Title>
          <Box
            sx={(theme) => ({
              width: "600px",
              [theme.fn.smallerThan("md")]: {
                width: "500px",
              },
              [theme.fn.smallerThan("xs")]: {
                width: "90%",
              },
            })}
          >
            <a
              target={"_blank"}
              href={
                "https://www.google.com/maps/place/Medieinstitutet/@57.7097478,11.9924801,17.09z/data=!4m5!3m4!1s0x464ff30de9cbee3d:0xbb3f902b63916df6!8m2!3d57.709754!4d11.9945328"
              }
            >
              <Image
                alt="Google Maps"
                fit="contain"
                src="./src/assets/map.png"
                style={{ marginTop: "40px" }}
              />{" "}
            </a>
          </Box>

          <Box>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:support@brainwave.se";
                e.preventDefault();
              }}
            >
              <Flex mt="lg" direction="column">
                <Text style={{ marginLeft: "30px", marginTop: "5px" }}>
                  {" "}
                  +4673-712 34 56
                </Text>
                <IconPhone style={{ marginTop: "-28px", marginRight: "4px" }} />

                <Text style={{ marginLeft: "30px", marginTop: "15px" }}>
                  support@brainwave.se{" "}
                </Text>
                <IconMail style={{ color: "black", marginTop: "-23px" }} />
              </Flex>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
