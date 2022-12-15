import { Text, Title } from "@mantine/core";
import { FC } from "react";
import { useForm } from '@mantine/form';
import { TextInput, Button, Textarea, Flex, Box } from '@mantine/core';
import { Image } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { CSSObject } from "@emotion/react";
import {IconAt} from '@tabler/icons';

 

 




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
    
    <Box
    bg="brnad.2"
    sx={{ width: '1600px' , }}
    m="xl"
    >
   
   <IconAt/>
    <form onSubmit={form.onSubmit(console.log)}>
  
      
      <Title order={1} sx={{ fontSize: '3em', textAlign: 'center'}} >Kontakt</Title>
      <Title order={2} sx={{ margin:'50px'}}>Kontakta Oss</Title>
      
   
      
      <Title order={2} sx={{ textAlign:'right', marginRight:'260px', marginTop: '-20px'}}>Kontoret</Title>
      
      <Image src="./src/assets/map.png" style={{ width: 600, float: 'right', marginTop: '20px'}} />
      
      
      
      <Text style={{  marginTop: '380px', marginLeft: '1000px'}} ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
      </svg> +4673-712 34 56</Text>


      <Text style={{  marginTop: '10px', marginLeft: '1000px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
      </svg> support@brainwave.se</Text>
    
    
      <TextInput label="Namn" placeholder="Namn" {...form.getInputProps('name')}
       sx={{ maxWidth: 500, marginTop: '-450px'}} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} 
      sx={{  maxWidth: 500,}}/>
      <TextInput mt="md" label="Ämne" placeholder="Ämne" {...form.getInputProps('subject')}
      sx={{ maxWidth: 500,}} />
      
      <Textarea placeholder="Din meddelande" label="Din meddelande" size="md" withAsterisk 
      sx={{ maxWidth: 500,}} />
      <Button type="submit" mt="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.brand[3],
    })}>
        Kontakta Oss
      </Button>
    
    
      

    </form>
    
    </Box>
  );
}

 
const styleObject = (): CSSObject => ({
  
});


export default Contact;

