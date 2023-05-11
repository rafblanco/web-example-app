import { Box } from "@mui/material";

type Props = {
  image: string;
  size: string;
};

const UserImage = ({ image, size = "60px" }: Props) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
