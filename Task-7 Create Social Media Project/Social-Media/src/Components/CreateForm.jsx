const CreatehtmlForm = () => {
  return (
    <form className="create-form">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Post Userid
        </label>
        <input
          type="text"
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
