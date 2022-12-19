import { Text, Title, Image, Box, Button} from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle  } from "../pageTitle";
const Home: FC = () => {
  useDocumentTitle("Hem")

  return (
    <>
      <Image 
      src="./src/assets/people_1920.jpg"
      height="108vh"
      width="100vw"
      fit="cover"
      sx={(theme)=>
        ({
        display: "flex",
        position:"absolute", 
        top:80, 
        left:0,
      })}
      
      />
      <Box 
      sx=
      {(theme)=>({
      position:"sticky",  
      left:0,    
      top:0,
      bottom:0,
      right:0,
      zIndex:1,
      width:"100vw",
      height:"100vh",
      marginTop:"-40px",
      marginLeft:"-16px",
      marginBottom:"-150px",
      background: 
      "linear-gradient(160deg, #FFFFFF 25%, rgba(255, 255, 255, 0) 58%)",
      [theme.fn.smallerThan(930)]:{
        marginTop:"-30px",
    
      }
      })}
      >
      <Title 
      sx={(theme) => ({
        color: theme.colors.brand[3],
        fontSize : theme.fontSizes.xl,
        margin: theme.spacing.md,
        paddingTop: 70,
        letterSpacing:-1,
        wordSpacing:-2,
        })}>
      Vi lyfter er organisation till  <br /> nästa nivå
      </Title>
      <Title
      sx={(theme) => ({
        color: theme.colors.brand[4],
        fontSize : theme.fontSizes.lg,
        marginLeft: theme.spacing.md,
        maxWidth: 650,
        textAlign:"left",
        paddingRight:"25px",
        paddingTop: 40,
        paddingBottom:40,
        [theme.fn.smallerThan(930)]:{
        paddingTop: 10,
        paddingBottom:10,
        paddingRight:"30px",
        }
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
        
      >Vårt Team</Button>
      </Link>
      </Box>
    </>
  );
};

export default Home;
