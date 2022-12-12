import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  DefaultMantineColor,
  MantineProvider,
  MantineTheme,
  Tuple,
} from "@mantine/core";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider
        theme={{
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },

          colors: {
            // Våra färger är inlagda här. Fick lägga till dem två gånger då Mantine vill ha totalt 10 färger när man skapar en egen färgkombo.
            // Går från ljusbeiget till mörkgrön. brand[0] = ljusbeige, brand[4] = mörkgrön
            brand: [
              "#eae6e3",
              "#3CC13B",
              "#FFC34E",
              "#C2C9D1",
              "#1F4045",
              "#eae6e3",
              "#3CC13B",
              "#FFC34E",
              "#C2C9D1",
              "#1F4045",
            ],
          },
          fontSizes: {
            xs: 10,
            sm: 13,
            md: 16,
            lg: 20,
            xl: 30,
          },
          headings: {
            sizes: {
              h2: { fontWeight: 600 },
            },
          },
          components: {
            Title: {
              styles: (theme: MantineTheme) => ({
                root: {
                  "&:is(h1)": {
                    color: theme.colors.brand[9],
                    lineHeight: 1.0,
                    fontSize: theme.fontSizes.lg * 3,
                    [theme.fn.smallerThan("md")]: {
                      fontSize: theme.fontSizes.lg * 2,
                    },
                    [theme.fn.smallerThan("sm")]: {
                      fontSize: theme.fontSizes.lg * 1.6,
                    },
                    [theme.fn.smallerThan("xs")]: {
                      fontSize: theme.fontSizes.lg * 1.3,
                    },
                  },
                  "&:is(h2)": {
                    color: theme.colors.brand[9],
                    fontSize: theme.fontSizes.lg * 1.1,
                    [theme.fn.smallerThan("md")]: {
                      fontSize: theme.fontSizes.lg * 1,
                    },
                    [theme.fn.smallerThan("xs")]: {
                      fontSize: theme.fontSizes.lg * 0.8,
                    },
                  },
                  "&:is(h3)": {
                    fontSize: theme.fontSizes.lg,
                    [theme.fn.smallerThan("md")]: {
                      fontSize: theme.fontSizes.md,
                    },
                  },
                },
              }),
            },
          },
        }}
      >
        <Layout />
      </MantineProvider>
    </BrowserRouter>
  );
}

type ExtendedCustomColors = "brand" | DefaultMantineColor;
declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
export default App;
