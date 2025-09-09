import { useContext } from "react";
import Post from "./Post";
import { PostAllListData } from "../Store/PostAllList";

const PostAllList = () => {
  const { postList } = useContext(PostAllListData);

  return (
    <>
      {postList.map((items) => {
        return <Post key={items.id} items={items} />;
      })}
    </>
  );
};

export default PostAllList;
