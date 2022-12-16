import { Text, Title, Image, TextInput, Button, Textarea, Flex, Box } from "@mantine/core";
import { FC } from "react";
import { useForm } from '@mantine/form';
import {IconPhone, IconMail} from '@tabler/icons';
import { Link } from "react-router-dom";


const Contact: FC = () => {
  
  const form = useForm({
    initialValues: { name: '', email: '', subject: '', Textarea: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.length < 2 ? 'Subject must have at least 2 letters' : null),
      Textarea: (value) => (value.length < 2 ? 'Textarea must have at least 2 letters' : null),
    },
  });

  return (
   
   
    <form onSubmit={form.onSubmit(console.log)}>
      
      <Title order={1} sx={{ textAlign: 'center'}} >Kontakt</Title>
      <Title order={2} sx={{ margin:'0px', marginLeft: '200px'}}>Kontakta Oss</Title>
      <Title order={2} sx={{ textAlign:'right', marginRight:'300px', marginTop: '-20px'}}>Kontoret</Title>
      
      <a target={"_blank"} href={"https://www.google.com/maps/place/Medieinstitutet/@57.7097478,11.9924801,17.09z/data=!4m5!3m4!1s0x464ff30de9cbee3d:0xbb3f902b63916df6!8m2!3d57.709754!4d11.9945328"}
       > <Image src="./src/assets/map.png" style={{ width: 700, float: 'right', marginTop: '10px'}} /></a>
      
      <Text style={{  marginTop: '430px', marginLeft: '900px'}} >
        <IconPhone/>+4673-712 34 56</Text>

      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:support@brainwave.se" ;
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
        <IconMail style={{ color: 'black', marginLeft: '900px'}} /> <Text ml="xs" style={{ color: 'black'}}>support@brainwave.se </Text>
      </Flex>
    </Link>


      <TextInput label="Namn" placeholder="Namn" {...form.getInputProps('name')}
       sx={{ maxWidth: 600, marginTop: '-490px'}} />
      <TextInput mt="lg" label="Email" placeholder="Email" {...form.getInputProps('email')} 
      sx={{  maxWidth: 600,}}/>
      <TextInput mt="lg" label="Ämne" placeholder="Ämne" {...form.getInputProps('subject')}
      sx={{ maxWidth: 600,}} />
      <br></br>
      <Textarea placeholder="Meddelande" label="Meddelande" size="lg" withAsterisk 
      sx={{ maxWidth: 600}} />
      
      <Button type="submit" mt="xl"
      sx={(theme) => ({
        backgroundColor: theme.colors.brand[3],
    })}>
        Kontakta Oss
      </Button>

    </form>
  
  );
}

export default Contact;

