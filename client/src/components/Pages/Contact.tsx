import { Text, Title } from "@mantine/core";
import { FC } from "react";
import { useForm } from '@mantine/form';
import { TextInput, Button, Textarea, Box, Flex } from '@mantine/core';
import { Image } from '@mantine/core';
import { IconMail, IconPhone } from "@tabler/icons";
import { Link } from "react-router-dom";

const Contact: FC = () => {
  const form = useForm({
    initialValues: { name: '', email: '', subject: '', textAre: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.length < 2 ? 'Subject must have at least 2 letters' : null),
      textAre: (value) => (value.length < 2 ? 'Textarea must have at least 2 letters' : null),
    },
  });

  return (
    <>
      <Title sx={{ fontSize: '3em', textAlign: 'center', margin: '10px' }} >Kontakt</Title>
      <Flex sx={(theme) => ({
        marginTop: '80px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        [theme.fn.smallerThan('md')]: {
          marginTop: "0px",
          wrap: 'wrap',
        },
      })}>
        <Box>
          <form onSubmit={form.onSubmit(console.log)}>
            <Title order={2} mt='xl' mb='md' sx={(theme) => ({
              [theme.fn.smallerThan("sm")]: {

              },
              [theme.fn.smallerThan("xs")]: {

              },
            })}>Kontakta Oss</Title>

            <TextInput label="Namn" placeholder="Namn" {...form.getInputProps('name')}
              sx={{ maxWidth: 500 }} />
            <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')}
              sx={{ maxWidth: 500, }} />
            <TextInput mt="md" label="Ämne" placeholder="Ämne" {...form.getInputProps('subject')}
              sx={{ maxWidth: 500, }} />

            <Textarea placeholder="Ditt meddelande" label="Ditt meddelande" mt='md' size='sm' withAsterisk
              sx={{ maxWidth: 500, }} />
            <Button type="submit" mt="md" sx={(theme) => ({ backgroundColor: theme.colors.brand[3] })}>
              Kontakta Oss
            </Button>
          </form>
        </Box>
        <Box mt='25px' >
          <Title order={2} mt='xs' sx={(theme) => ({
            [theme.fn.smallerThan('md')]: {
              marginLeft: '210px'
            },
            [theme.fn.smallerThan("sm")]: {
              marginLeft: '210px'
            },
          })}>Kontoret</Title>
          <a target={"_blank"} 
            href={"https://www.google.com/maps/place/Medieinstitutet/@57.7097478,11.9924801,17.09z/data=!4m5!3m4!1s0x464ff30de9cbee3d:0xbb3f902b63916df6!8m2!3d57.709754!4d11.9945328"}> <Image src="./src/assets/map.png" style={{ width: 600, marginTop: '40px' }} sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              width: '300px'
            },
            [theme.fn.smallerThan("xs")]: {
              width: '150px'
            },
          })} /> </a>

          <Box sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              marginLeft: '170px'
            },
            [theme.fn.smallerThan("xs")]: {
              marginLeft: '170px'
            },
          })} >
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:support@brainwave.se";
                e.preventDefault();
              }}
            >
              <Flex mt='xs' direction='column' >
                  <Text style={{ color: 'black' }}>
                  <IconMail style={{ color: 'black', marginRight: '4px', marginTop: '15px',}} /> support@brainwave.se </Text>
                  <Text >
                    <IconPhone style={{marginTop: '15px', marginRight: '4px' }} />+4673-712 34 56
                      </Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Flex >
    </>
  );
}

export default Contact;

