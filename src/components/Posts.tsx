import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchPosts } from "../store/authActions";
import { selectPosts } from "../store/selectors";
import { IPost } from "../types/IPost";
import Post from "./Post";

type Props = {
  userId?: string;
  isProfile?: boolean;
};

const Posts = ({ userId, isProfile = false }: Props) => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    // if (isProfile) {
    //   getUserPosts();
    // } else {
    dispatch(fetchPosts());
    // }
  }, []);

  return (
    <>
      {posts.map(
        ({
          id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }: IPost) => (
          <Post
            key={id}
            postId={id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default Posts;
