import { useContext, useRef } from "react";
import { PostAllListData } from "../Store/PostAllList";

const CreatehtmlForm = () => {
  const { addPost } = useContext(PostAllListData);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmitButton = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(",");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    userIdElepostReactionsElementment.current.value = "";
    postTagsElement.current.value = "";
    addPost(userId, postTitle, postContent, postReactions, postTags);
  };

  return (
    <form className="create-form" onSubmit={handleSubmitButton}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Post Userid
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="Enter Your UserId Here...."
          id="userid"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="How are you feeling todays...."
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postContentElement}
          rows="4"
          className="form-control"
          placeholder="Tell us more about it..."
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="text"
          ref={postReactionsElement}
          className="form-control"
          placeholder="How many people reacted this post..."
          id="reaction"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Tags Here
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          placeholder="Please enter tags using space..."
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatehtmlForm;
