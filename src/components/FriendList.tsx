import { Box, Typography, useTheme } from "@mui/material";
import Friend from "./Friend";
import Wrapper from "./Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../types/IUser";
import { selectFriends, selectIsAuth } from "../store/selectors";
import { setFriends } from "../store/authSlice";

type Props = {
    userId?: number,
}

const FriendList = ({ userId }: Props) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector(selectIsAuth);
  const friends = useSelector(selectFriends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default FriendList;