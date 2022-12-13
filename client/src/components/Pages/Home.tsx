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
      paddingTop:20,
      paddingLeft:20,
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
        margin: theme.spacing.sm,
        })}>
      Sed ut perspiciatis unde omnis
      </Title>
      <Text 
      sx={(theme) => ({
        color: theme.colors.brand[4],
        fontSize : theme.fontSizes.sm,
        marginLeft: theme.spacing.sm,
        maxWidth: 400,
        })}
        >
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </Text>
      <Link to="/members">
      <Button
      sx={(theme) => ({
        background: theme.colors.brand[3],
        fontSize : theme.fontSizes.md,
        margin: theme.spacing.sm,
        borderRadius: 8,
        ":hover": {
          borderRadius: 8,
          background: theme.colors.brand[4],
        }
        })}
      >Members</Button>
      </Link>
      </Box>
    </>
  );
};

export default Home;
