import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import FriendList from "../../components/FriendList";
import MyPost from "../../components/MyPost";
import Navbar from "../../components/Navbar";
import Posts from "../../components/Posts";
import User from "../../components/User";
import { selectUser } from "../../store/selectors";

export const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { id, picturePath } = useSelector(selectUser);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <User userId={id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPost picturePath={picturePath} />
          <Posts userId={id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box m="2rem 0" />
            <FriendList />
          </Box>
        )}
      </Box>
    </Box>
  );
};
