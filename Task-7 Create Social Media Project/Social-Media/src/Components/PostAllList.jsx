import { useContext, useState } from "react";
import Post from "./Post";
import { PostAllListData } from "../Store/PostAllList";
import WelcomeMsz from "./WelcomMSz";

const PostAllList = () => {
  const { postList, addInitialPosts } = useContext(PostAllListData);

  const [dataFetch, setDataFetch] = useState(false);

  if (!dataFetch) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetch(true);
  }

  const handleOnCLickButton = () => {};

  return (
    <>
      {postList.length === 0 && <WelcomeMsz />}
      {postList.map((items) => {
        return <Post key={items.id} items={items} />;
      })}
    </>
  );
};

export default PostAllList;
