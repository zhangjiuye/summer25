import React from "react";

const CreatePost = () => {
  return (
    <div className="container bg-light p-5">
      <h3 className="text-center text-uppercase pt-4">Edit Post</h3>
      <h3 className="text-center text-uppercase pt-4">Create Post</h3>
      <div id="alertMsg"></div>
      <div className="col-12 text-center">
        <div className=" text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>

      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input type="text" className="form-control" id="title" required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Post Description
            </label>
            <textarea
              className="form-control"
              id="description"
              required
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              'Edit Post'
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
