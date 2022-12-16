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
      overflow:"hidden",
      position:"fixed",  
      left:0,    
      top:60,
      bottom:55,
      zIndex:1,
      width:"100vw",
      height:"100vh",
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
        letterSpacing:-1,
        wordSpacing:-2,
        })}>
      Vi lyfter er organisation till <br /> nästa nivå
      </Title>
      <Title
      sx={(theme) => ({
        color: theme.colors.brand[4],
        fontSize : theme.fontSizes.lg,
        marginLeft: theme.spacing.md,
        maxWidth: 550,
        textAlign:"justify",
        paddingRight:"25px",
        paddingTop: 40,
        paddingBottom:40,
        letterSpacing:-1,
        wordSpacing:-1,
        })}
        order={2}
        >
       Våra konsulter står redo, med relevant erfarenhet för att möta era
       nuvarande utmaningar – oavsett om det gäller den dagliga verksamheten,
       en förändringsresa eller utveckling. Med stor passion för matchning
       och utveckling, säkerställer vi rätt konsult för era behov
      </Title>
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
