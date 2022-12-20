import { Flex } from '@mantine/core';
import { createStyles, Container, Group,Text } from '@mantine/core';
import { Button } from '@mantine/core';

import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#EAE6E3",
    marginTop: 100,

  },
 

  inner: {
    maxWidth:1100,
    display: 'flex', 
    flexWrap:"wrap",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    }

    
  },
  button: {
    flexWrap:'wrap',
    backgroundColor:"#7F9593",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },


  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text sx= {{paddingBottom:"20px"}} align="center"> 
        Brainwave hjälper företag med allt inom utveckling. Söker du tillgängliga, taggade och proffsiga IT-konsulter? 
        </Text>
        <Flex sx={{width:"288px" ,justifyContent:"space-around", paddingLeft: "3px"}}> 
          <Link to ="/login">
            <Button color="brand.3">Logga in</Button> 
          </Link>
          <Link to ="/contact">
            <Button  color="brand.3">Kontakta oss</Button>
          </Link>
        </Flex>  
      </Container>
      <Container>
      
        <Text sx ={{paddingBottom:"30px"}} color="EAE6E3" size="md" align="center" >
          <Text> Anders Personsgatan 18, Göteborg </Text>
          © 2022 Brainwave. All rights reserved.
        </Text >
         
      </Container>
      
    </div>
    
  );
}












