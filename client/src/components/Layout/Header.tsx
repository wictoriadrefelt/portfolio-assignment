import { useState } from 'react';
import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
  Box,
  Flex,
  Menu,
  createStyles,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  dropdown: {
    paddingTop: '100px',
    display: 'flex',
    padding: '20px',
    marginLeft: '0',
    marginRight: '0',
    postion: 'relative',
    height: '150px',
    background: 'white',
    justifyContent: 'center',
    marginTop: '40px',
    width: '400px',
    border: '1 px solid black',
  },
  menuLinks: {
    textDecoration: 'none',
    fontFamily: 'Quicksand',
    alignItems: 'flex-end',
    color: 'black',
    width: '80%',
  }
}))


export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const link = {
    fontSize: 14,
    color: '#FFFFFF',
    padding: 3,
    paddingRight: 15,
    FontFace: 'Quicksand',
    textDecoration: 'none',

}

  return (
        <MantineHeader p={10}
          withBorder={false}
          height={80}
          sx={{
            display: "flex",
            backgroundColor: theme.colors.brand[3],
          }}
        >
        <Box
          sx={{ width: '100%', maxWidth: 1680 }} > 
          <a href="/" >
        <Image
          width={200}
          height={60}
          src="..\src\assets\logo.png"
        />
          </a>
        </Box>
        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <Flex direction='row' p='sm'>
          <Link hidden={opened} style={link}
            to="/login">Login </Link>
          <Link style={link} hidden={opened} to='/contact'>Contact</Link>     
          </Flex>      
        </MediaQuery> 
          <Flex direction='column' justify='center' align='center'>
        <MediaQuery largerThan='xs' styles={{ display: 'none'}}>
            <Flex> 
              <Menu shadow='md' width='80%'>
                  <Menu.Target>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.brand[0]}
                    mr="xs"
                    
                />
                  </Menu.Target>
                <Menu.Dropdown className={classes.dropdown}>
                  <Link to='/'> 
                <Menu.Item component="a" className={classes.menuLinks}>Home</Menu.Item>
                  </Link>
                  <Link to='/login'> 
                <Menu.Item component="a" className={classes.menuLinks}>Login</Menu.Item>
                  </Link>
                  <Link to='/contact'> 
                <Menu.Item component='a' className={classes.menuLinks}>Contact</Menu.Item>
                  </Link>
                </Menu.Dropdown>
                </Menu>
                </Flex>
                  </MediaQuery>
              </Flex>
          </MantineHeader>
  );
}