import { Text, Title, Image, Box, Button} from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <Image 
      src="./src/assets/people_1920.jpg"
      height="100vh"
      width="100vw"
      sx={{position:"fixed", top:0, left:0}}
      />
      <Box 
      sx=
      {{
      position:"fixed",  
      top:60,
      left:0,
      bottom:60,
      padding:20,      
      zIndex:9999,
      maxWidth:"600px",
      height: "84.5vh",
      background: 
      "linear-gradient(to bottom right, #FFFFFF 20%, rgba(255, 255, 255, 0) 55%)",
  
      }}
      >
      <Title 
      sx={(theme) => ({
        color: theme.colors.brand[3],
        fontSize : theme.fontSizes.xl,
        margin: theme.spacing.md,
        })}>
      Sed ut perspiciatis unde omnis
      </Title>
      <Text 
      sx={(theme) => ({
        color: theme.colors.brand[4],
        fontSize : theme.fontSizes.lg,
        marginLeft: theme.spacing.md,
        maxWidth: 550,
        })}
        >
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </Text>
      <Link to="/members">
      <Button
      sx={(theme) => ({
        background: theme.colors.brand[3],
        fontSize : theme.fontSizes.lg,
        margin: theme.spacing.md,
        borderRadius: 8,
        ":hover": {
          borderRadius: 8,
          background: theme.colors.brand[4],
        },
        height:52,
        width: 192,
        })}
        
      >Members</Button>
      </Link>
      </Box>
    </>
  );
};

export default Home;
