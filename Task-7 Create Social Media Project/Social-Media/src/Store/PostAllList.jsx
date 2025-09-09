import { createContext, useReducer } from "react";

export const PostAllListData = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const postReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((data) => {
      return data.id !== action.payload.deleteid;
    });
  }
  return newPostList;
};

const PostAllListProvider = ({ children }) => {
  const [postList, dispatchList] = useReducer(postReducer, DEFAULT_POST);

  const addPost = () => {};

  const deletePost = (deleteid) => {
    dispatchList({
      type: "DELETE_POST",
      payload: {
        deleteid,
      },
    });
  };
  return (
    <PostAllListData.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostAllListData.Provider>
  );
};

const DEFAULT_POST = [
  {
    id: "1",
    title: "Dhirendra Bam",
    body: "From Nepal",
    Reaction: 2,
    userId: "dhirendra_001",
    tags: ["dhangadi", "doti", "kathmandu"],
  },
  {
    id: "2",
    title: "Shibani Bam",
    body: "From Nepal",
    Reaction: 3,
    userId: "Shibani_001",
    tags: ["Pokhara", "Kailali", "kathmandu"],
  },
];

export default PostAllListProvider;
