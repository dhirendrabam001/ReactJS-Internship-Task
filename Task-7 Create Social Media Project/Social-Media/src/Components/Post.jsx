import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostAllListData } from "../Store/PostAllList";
const Post = ({ items }) => {
  const { deletePost } = useContext(PostAllListData);
  return (
    <div className="card card-info" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {items.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(items.id)}
          >
            <MdOutlineDelete />
          </span>
        </h5>
        <p className="card-text">{items.body}</p>
        {items.tags.map((tags) => {
          return (
            <span key={tags} className="badge bg-primary tags-btn">
              {tags}
            </span>
          );
        })}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {items.Reaction} people!
        </div>
      </div>
    </div>
  );
};

export default Post;
