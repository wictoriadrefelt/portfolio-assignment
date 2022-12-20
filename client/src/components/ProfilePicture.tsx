import { FC } from "react";
import { createStyles } from "@mantine/core";

interface Props {
  imagePath: string;
}
const ProfilePicture: FC<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <img alt="Bild på medlem" className={classes.image} src={props.imagePath} />
  );
};

const useStyles = createStyles((theme, _params, getRef) => ({
  image: {
    borderRadius: "50%",
    objectFit: "cover",
    height: "240px",
    width: "240px",
    "&:hover": {
      boxShadow: "0px 5px 10px" + theme.colors.brand[4],
    },
  },
}));

export default ProfilePicture;
