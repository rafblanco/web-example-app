import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FriendList from "../../components/FriendList";
import MyPost from "../../components/MyPost";
import Navbar from "../../components/Navbar";
import Posts from "../../components/Posts";
import User from "../../components/User";
import { selectIsAuth } from "../../store/selectors";
import { IUser } from "../../types/IUser";

export const Profile = () => {
  const [user, setUser] = useState<IUser>(null);
  const { userId } = useParams();
  const token = useSelector(selectIsAuth);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <User userId={userId} picturePath={user?.picturePath} />
          <Box m="2rem 0" />
          <FriendList />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPost picturePath={user?.picturePath} />
          <Box m="2rem 0" />
          <Posts userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};
