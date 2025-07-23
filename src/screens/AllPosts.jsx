import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../store/postsSlice";
import { Link } from "react-router-dom";

function AllPosts() {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  let content;
  if (status === "loading") {
    content = (
      <div className="col-12 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (status === "succeeded") {
    content = posts.map((post, index) => {
      return (
        <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-2">
          <div className="card">
            <img
              style={{ height: "280px" }}
              src="https://source.unsplash.com/random/400*400/?city,night"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <div className="d-grid border border-primary">
                <Link
                  to={`/posts/${post.id}/${post.userId}`}
                  className="btn btn-primary text-uppercase"
                >
                  <i className="fa-solid fa-location-arrow me-1"></i>
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else if (status === "failed") {
    content = <div className="col-12 text-center text-danger">{error}</div>;
  }

  return (
    <div>
      <section className="container pt-2">
        <h3 className="text-center text-uppercase py-4">All Posts</h3>
        <div id="alertMsg"></div>
        <div className="row">{content}</div>
      </section>
    </div>
  );
}

export default AllPosts;
