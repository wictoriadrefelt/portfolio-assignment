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
      left:0,    
      top:60,
      bottom:55,
      zIndex:9999,
      width:"100vw",
      background: 
      "linear-gradient(140deg, #FFFFFF 20%, rgba(255, 255, 255, 0) 75%)",
      }}
      >
      <Title 
      sx={(theme) => ({
        color: theme.colors.brand[3],
        fontSize : theme.fontSizes.xl,
        margin: theme.spacing.md,
        paddingTop: 50,
        letterSpacing:-2,
        wordSpacing:-2,
        })}>
      Sed ut perspiciatis unde <br /> omnis
      </Title>
      <Text 
      sx={(theme) => ({
        color: theme.colors.brand[4],
        fontSize : theme.fontSizes.lg,
        marginLeft: theme.spacing.md,
        maxWidth: 550,
        textAlign:"justify",
        paddingRight:"25px",
        paddingTop: 40,
        paddingBottom:40,
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
