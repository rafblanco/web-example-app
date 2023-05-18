import { useAuth } from "@clerk/clerk-react";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchFriends } from "../store/authActions";
import { selectFriends } from "../store/selectors";
import { IUser } from "../types/IUser";
import Friend from "./Friend";
import Wrapper from "./Wrapper";

const FriendList = () => {
  const dispatch = useAppDispatch();
  const { palette } = useTheme();
  const friends = useSelector(selectFriends);
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return null;
  }

  useEffect(() => {
    dispatch(fetchFriends(userId));
  }, []);

  return (
    <Wrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.map((friend: IUser) => (
          <Friend
            key={friend.id}
            friendId={friend.id}
            name={`${friend.firstName} ${friend.lastName}`}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default FriendList;
