import { Text } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Member } from "./Members";

const Profile: FC = () => {
  const { slug } = useParams();
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:4000/api/members/" + slug);
        let result = await response.json();
        if (result) {
          setMember(result);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Text>{member?.name}</Text>
    </div>
  );
};

export default Profile;
