import { useAuth } from "@clerk/clerk-react";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks/reduxHooks";
import { addFriend } from "../store/authActions";
import { selectFriends, selectUser } from "../store/selectors";
import { IUser } from "../types/IUser";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

type Props = {
  friendId?: string;
  name?: string;
  userPicturePath?: string;
};

const Friend = ({ friendId, name, userPicturePath }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoaded, userId } = useAuth();
  const friends = useSelector(selectFriends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;

  if (!isLoaded || !userId || !friendId) {
    return null;
  }

  const isFriend = friends?.find((friend: IUser) => friend.id === friendId);

  const addAFriend = async () => {
    dispatch(addFriend(userId, friendId));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => addAFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
