import { Text } from "@mantine/core";
import { FC } from "react";
import { useParams } from "react-router-dom";

const Profile: FC = () => {
  const { slug } = useParams();

  console.log(slug);
  return (
    <div>
      <Text>Profilsida</Text>
    </div>
  );
};

export default Profile;
